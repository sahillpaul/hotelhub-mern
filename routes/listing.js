const express=require("express");
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const router=express.Router();
const{isLoggedIn,isOwner,validatelisting}=require("../middleware.js")
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});
const listingController=require("../controllers/listing.js");

router.route("/")
     .get(wrapAsync(listingController.index))   // 👈 search handled here
    .post(isLoggedIn,upload.single("listing[image]"),validatelisting,wrapAsync(listingController.createListing));//New Listing
//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
    .get(listingController.showListing)//Show route
    .put(isLoggedIn,upload.single("listing[image]"),isOwner,wrapAsync(listingController.updateListing))//Update Listing
    .delete(isLoggedIn,isOwner,listingController.deleteListing);//Delete Route

//Update route
router.get("/:id/edit",isLoggedIn,isOwner, listingController.renderEditForm);



module.exports=router;