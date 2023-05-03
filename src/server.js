const express = require("express");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static(__dirname + "/public"));

// Security changes
app.use(helmet());
app.disable("x-powered-by");

// Performance changes
app.use(compression());

app.get("/", (req, res) => {
    res.render("index");
});
app.listen(3001);
