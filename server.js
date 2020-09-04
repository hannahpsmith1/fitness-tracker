// console.log("hellow")

// const express = require("express");
// const logger = require("morgan");
// // const path = require("path");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3000;

// // const db = require("./models");
// const Workout = require('./models/Workout')
// const app = express();

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// require("./routes/api")(app);
// require("../routes/html")(app);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// // var apiRoutes = require (path.join(__dirname, "routes/api.js"));
// // app.use("/api", apiRoutes);

// // require('./routes/api')(app);
// // require('./routes/html')(app);



// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
//   });

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