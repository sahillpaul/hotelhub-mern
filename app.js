require("dotenv").config();


const express=require("express");
const app=express();
const mongoose=require("mongoose");
const session=require("express-session");
// CORRECT import for connect-mongo v6.x
const { MongoStore } = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");


const path=require("path");
app.use(express.urlencoded({ extended: true }));
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

let dbUrl=process.env.ATLASDB_URL;


main().then((res)=>{
    console.log("DB connected succesfully!");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// Now use 'new MongoStore()' - this will work!
const store = new MongoStore({
    mongoUrl: dbUrl,
    crypto: {
        secret:process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error",(err)=>{
    console.log("Error in Mongo store", err);
});

const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    },
    }
    

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

console.log("Authenticate exists:", typeof User.authenticate);

console.log("RUNNING APP.JS — VERSION CHECK");


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user;
    next();
});

const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// let mongo_url="mongodb://127.0.0.1:27017/wanderlust";


// HOME → redirect to listings
app.get("/", (req, res) => {
    res.redirect("/listings");
});


app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

// app.get("/demouser", async (req, res) => {
//     let fakeUser = new User({
//         email: `test${Date.now()}@gmail.com`,
//         username: `user_${Date.now()}`
//     });

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });





app.all(/.*/,(req,res,next)=>{
    next(new ExpressError(404,"Page not found!"));
});

app.use((err, req, res, next) => {
    console.error("ERROR:", err);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";

    res.status(statusCode).render("listings/error.ejs", { message });
});


app.get("/force-error", (req, res, next) => {
    next("FORCED ERROR TEST");
});

app.listen(8080,()=>{
    console.log("App is running on port 8080");
})

