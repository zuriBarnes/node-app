const express = require("express");

// express app
const app = express();

app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    // { title: "Mario", snippet: "ffhjfdp[j[pkryjk" },
    // { title: "Ryu", snippet: "gkegpsts" },
    // { title: "Star", snippet: "poergjfnfkwkg" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

//   404 Page

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// app.get("", (req, res) => {
//   res.sendFile("./views/404.html", { root: __dirname });
// });

let nums = [1, 1, 2, 3, 4];
const moreNums = [...nums, 124, 444];
console.log(moreNums);
