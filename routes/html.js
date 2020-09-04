

// // import dependencies 
// const express = require("express");
// const path = require("path");

// // create router
// const router = express.Router();

// // add routes
// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// // GET /exercise serves exercise.html
// router.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/exercise.html"));
// });

// // GET /stats serves stats.html
// router.get("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/stats.html"));
// });

// // export router
// module.exports = router;


// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
// var path = require("path");

// module.exports = function(app) {
//   // Called when "Countinue Workout" or "new Workout" is clicked in index.html
//   app.get("/exercise", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
//   });
//   // Not quite sure what this is used for yet ....
//   app.get("/stats", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/stats.html"));
//   });
// }



var path = require("path");


module.exports = function(app) {

    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    
};