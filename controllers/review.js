const Listing=require("../models/listing.js");
const Review=require("../models/review.js");

module.exports.createNewReview=async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let NewReview=new Review(req.body.review);
    NewReview.author=req.user._id;
    await NewReview.save();
    listing.reviews.push(NewReview);
    await listing.save();

    console.log("New Review saved");
    // res.send("New Review Saved");
    req.flash("success","New Review Created");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.deleteReview=async(req,res)=>{
        let {id,reviewId}=req.params;
        await Review.findByIdAndDelete(reviewId);
        await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
        req.flash("success","Review Deleted");
        res.redirect(`/listings/${id}`);
    }