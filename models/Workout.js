// const mongoose = require ("mongoose");
// // const Excersise = require ('./Excercise');


// // example
// // type: "resistance",
// // name: "Bicep Curl",
// // duration: 20,
// // weight: 100,
// // reps: 10,
// // sets: 4

// const Schema = mongoose.Schema;

// const ExcSchema = new Schema ({

//     type: {
//         type: String,
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     duration: {
//         type: Number, 
//         required: true,
//     },
//     weight: {
//         type: Number,
//     }, 
//     reps: {
//         type: Number,
//     },
//     sets: {
//         type: Number,
//     },
//     distance: {
//         type: Number,
//     },


// });


// const WorkoutSchema = new Schema ({
//     day: {
//         type: Date,
//         default: Date.now,
//         required: true
//     }, 
//     excersise: [
//         ExcSchema
//     ]

// });


// const workOutModel = mongoose.model("Workout", WorkoutSchema);

// module.exports = workOutModel;


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;