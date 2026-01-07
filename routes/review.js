const express=require("express");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const router=express.Router({ mergeParams: true });
const { ReviewSchema } = require("../schema.js");
const Listing=require("../models/listing.js");
const {validatereview, isLoggedIn,isReviewAuthor}=require("../middleware.js");

const reviewController=require("../controllers/review.js");
//New Review
router.post("/",validatereview,isLoggedIn,reviewController.createNewReview);

// Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview)
)

module.exports=router;