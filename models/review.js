const mongoose=require("mongoose");
let Schema=mongoose.Schema;
let ReviewSchema=new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    Dates:{
        type:Date,
        default:Date.now
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

module.exports=mongoose.model("Review",ReviewSchema);

