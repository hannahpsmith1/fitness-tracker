
// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");

// // create the app
// const app = express();
// const PORT = process.env.PORT || 8080;

// // parse JSON in request bodies
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// // connect to database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });

// // add routes
// app.use(require("./routes/html-routes.js"));
// app.use(require("./routes/api-routes.js"));

// // listen
// app.listen(PORT, () => {
//   console.log("App now listening at http://localhost:" + PORT);
// });

// const express = require("express");
// const logger = require("morgan");
// // const path = require("path");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3000;

// // const db = require("./models");
// //const Workout = require('./models/Workout')
// const app = express();

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// app.use(require("./routes/api"));
// app.use(require("./routes/html"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// // var apiRoutes = require (path.join(__dirname, "routes/api.js"));
// // app.use("/api", apiRoutes);

// // require('./routes/api')(app);
// // require('./routes/html')(app);

// console.log("hellow")

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
//   });


// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3000;

// const app = express();

// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// const db = require("./models");

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
