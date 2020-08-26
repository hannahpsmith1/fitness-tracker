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

const ActivitySchema = new Schema ({

    type: {
        type: String,
    },
    name: {
        type: String,
    },
    duration: {
        type: Number, 
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


});