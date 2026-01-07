// const mongoose=require("mongoose");
// const initdata=require("../init/data.js");
// const Listing=require("../models/listing.js");

// let mongo_url="mongodb://127.0.0.1:27017/wanderlust";
// main().then((res)=>{
//     console.log("DB connected succesfully!");
// }).catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(mongo_url);
// }

// const initDB=async()=>{
//     await Listing.deleteMany({});
//     initdata.data=initdata.data.map((obj)=>({...obj,owner:"695373ac8ca55b2a3c2b102e"}));
//     await Listing.insertMany(initdata.data);
//     console.log("Data was Initialized.");
// };
// initDB();


const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { data } = require("./data");

main()
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {

  // insert new listings
  await Listing.insertMany(data);

  console.log("Listings seeded successfully");
};

initDB();

