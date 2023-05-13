console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});


//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 Session

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code

app.get("/create-item", function (req, res) {
   //to do
  });

app.get("/author", function (req, res) {
    res.render("author", { user: user });
  });

//app.get("/hello", function (req, res) {
 //   res.end(`<h1 style="background: red">Hello World by Muhriz</h1>`);
//});

//app.get("/gift", function (req, res) {
 //   res.end(`<h1 style="background: red">Siz sovgalar sahifasidasiz</h1>`);
//});

app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});