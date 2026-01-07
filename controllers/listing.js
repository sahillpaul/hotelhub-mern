const Listing=require("../models/listing.js");

module.exports.index = async (req, res) => {
  const { search, category } = req.query;

  let query = {};

  if (search && search.trim() !== "") {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { country: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  if (category) {
    query.category = category;
  }

  const alllistings = await Listing.find(query);
  res.render("listings/index.ejs", { alllistings, search, category });
};


module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.createListing=async(req,res,next)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    await newListing.save();    
    req.flash("success","New Listing Created");
    res.redirect("/listings");
}

module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate({
        path:"reviews", 
        populate:{path:"author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing Doesn't exist");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
    console.log(listing);
}

module.exports.renderEditForm=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    req.flash("success","Listing Updated");
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    // 1. Get the document
    let listing = await Listing.findById(id);
    // 2. Update normal fields
    listing.set(req.body.listing);

    // 3. Update image if file exists
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    // 4. Save document
    await listing.save();

    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
};


module.exports.deleteListing=async(req,res)=>{
    let {id}=req.params;
    let DeletedListing=await Listing.findByIdAndDelete(id);
    console.log(DeletedListing);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}