// // const express = require("express")
// // var router = express.Router();

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



// // router.get("/", function(req, res){
// //     res.send ("okay")
// // });

// // router.get("/workout", function(req, res){
// //     res.send ("workout")
// // });



// module.exports = router;


var db = require("../models");

module.exports = function(app) {

    // Used by api.js to get last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // Creates a new workout in the workout database
    app.post("/api/workouts", async (req, res)=> {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error occurred creating a workout: ", err)
        }
    })

    // Used by api.js to add an exercise to a workout
    app.put("/api/workouts/:id", ({body, params}, res) => {
        // console.log(body, params)
        const workoutId = params.id;
        let savedExercises = [];

        // gets all the currently saved exercises in the current workout
        db.Workout.find({_id: workoutId})
            .then(dbWorkout => {
                // console.log(dbWorkout)
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises){
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
            if(err){
                console.log(err)
            }

            })
        }
            
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
};