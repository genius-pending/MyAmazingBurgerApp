//set dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

//use app for an express call
const app = express();

//Set port, process.env.PORT for heroku, 3000 for local machine
let PORT = process.env.PORT || 3000;

//uese method override for forum PUT and DELETE queries
app.use(methodOverride("_method"));

//set engine and default for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}) );
app.set("view engine", "handlebars");

//set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//serve static content from the public directory
app.use(express.static(__dirname + "/public"));

//require burgers-controller,js for the routes
let routes = require("./controllers/burgers-controller.js");

app.use("/", routes);
app.use("/:id", routes);

//Initiate the listener
app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
