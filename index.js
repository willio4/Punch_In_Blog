import express from "express";
import ejs from "ejs";

let articles = [];

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Built-in Express middleware replaces body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from "public"
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});