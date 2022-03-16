//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const port = process.env.PORT || 8080
const app = express();
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", (req, res) => {
  let addItem = date.titleCase(req.body.newItem);
  if (req.body.list === "Work List") {
    workItems.push(addItem);
    res.redirect("/work");
  } else {
    if (req.body.delete === "deleteitem") {
      var index = items.indexOf(addItem);
      if (index !== -1) {
        items.splice(index, 1);
        res.redirect("/");
      }
      else{
        res.redirect("/");
      }
    }else{
    items.push(addItem);
    res.redirect("/");
  }
  }
});

app.get("/work", (req, res) => {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
