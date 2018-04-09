const express = require("express");
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.post("/", (req, res) => {
    let recievedData = req.body.name;
    if(req.headers["content-type"] == "application/json")
        res.send(`POST Data recieved via ajax call is ${recievedData}`);
    else if(req.headers["content-type"] == "application/x-www-form-urlencoded")
        res.send(`POST Data recieved via post form is ${recievedData}`);
});

app.get("/", (req, res) => {
    console.log(req.headers);
    let data = {
        content: "Lorem Ipsum"
    }
    res.send(data);
})

app.get("/get", (req, res) => {
    res.render("ajaxGet");
});

app.get("/post", (req, res) => {
    res.render("ajaxPost");
})

app.get("*", (req, res) => {
    res.send("404!");
});

app.listen(3000, () => {
    console.log(`Server Started`);
});