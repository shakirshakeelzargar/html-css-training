// const express = require('express')
import express from "express";
import moment from "moment";
import { quotes } from "./util.js";

const app = express();
app.use(express.json());
const users = [
  {
    name: "John",
    address: 'United States',
  },
  {
    name: "John1",
    address: "United States1",
  },
  {
    name: "John2",
    address: "United States2",
  },
];

app.get("/hello", function (req, res) {
  console.log(req.query);
  res.json({ name: "helloworld" });
});

app.get("/users", function (req, res) {
  res.json(users);
});

app.get("/getTenthDayFromToday", function (req, res) {
  res.json({ date: moment().add(10, "days") });
});

app.get("/quotes", function (req, res) {
  res.json(quotes);
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "user1" && password === "pass1") {
    res.json({
      isLoggedIn: true,
      token: "ruioiuytredfghujikjhgffghjkjhgfvghj",
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }

  res.send("Hello I am Login");
});
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
