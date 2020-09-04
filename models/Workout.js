const mongoose = require ("mongoose");
const Excersise = require ('./Excercise');


// example
// type: "resistance",
// name: "Bicep Curl",
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4

const Schema = mongoose.Schema;

const ExcSchema = new Schema ({

    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, 
        required: true,
    },
    weight: {
        type: Number,
    }, 
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    },


});


const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now,
        required: true
    }, 
    excersise: [
        ExcSchema
    ]

});


const workOutModel = mongoose.model("Workout", WorkoutSchema);

module.exports = workOutModel;