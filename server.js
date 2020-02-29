const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.send("Welcome to Passport with Sequelize without Handlebars");
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});