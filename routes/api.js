const express = require("express")
var router = express.Router();




router.get("/", function(req, res){
    res.send ("okay")
});

router.get("/workout", function(req, res){
    res.send ("workout")
});



module.exports = router;