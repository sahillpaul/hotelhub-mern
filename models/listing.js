const mongoose=require("mongoose");
const Review=require("./review.js");
const { listingschema } = require("../schema");
let Schema=mongoose.Schema;
let ListingSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image: {
        url:String,
        filename:String
    },
    price:Number,
    location:String,
    country:String,
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    }],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    category: {
        type: String,
        enum: [
            "Trending",
            "Rooms",
            "Iconic cities",
            "Mountains",
            "Pools",
            "Hotels",
            "Villas",
            "Beaches",
            "Farms",
            "Arctic"
        ],
        default: "Rooms"
    }
})

ListingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
})

const Listing=mongoose.model("listing",ListingSchema);
module.exports=Listing;