
// // const app = require("express").Router();
// const workOutModel = require("../models/workout.js");
// // const { db } = require("../models/workout");

// module.exports = function(app) {

// // get route

//     app.get("/api/workouts", (req, res) => {
//         workOutModel.find({}, function (err, doc) {
//             if (err) {
//                 res.status(500).send(err)
//             }else{
//                 res.json(doc)
//             }
//         });
//     });

// // put route, updating a workout

//     app.put("/api/workouts/:id", (req, res) => {
//     workOutModel.findByIdAndUpdate(req.params.id, 
//         {$push: { exercises: req.body} }, {new: true})
//     .then(function(workout){
//         console.log("get", workout)
//         res.send(workout)
//     })
//     .catch(function(err){
//         if(err)throw err
//     });
// });

// // creating a workout, post route

//     app.post("/api/workouts", (req, res) => {
//         workOutModel.create(req.body)
//         .then(function(workout){
//             res.send(workout)
//         })
//         .catch(function(err){
//             if(err)throw err
//         });

//     });

// // get route, similar to one we created, finding first 7 workouts

//     app.get("/api/workouts/range", function(req, res){
//         workOutModel.find({}).limit(7)
//         .then(function(workout){
//             console.log("get", workout)
//             res.send(workout)
//         })
//         .catch(function(err){
//             if(err)throw err
//         });
//     });

// }







// var path = require("path");

// module.exports = function(router) {

//     router.get("/exercise", function(req, res){
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     });

//     router.get("/", function(req, res){
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });

//     router.get("/stats", function(req, res){
//         res.sendFile(path.join(__dirname, "../public/stats.html"));
//     });
    
// };


const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
// routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });