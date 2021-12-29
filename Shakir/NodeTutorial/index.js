// const express = require('express')
import express from "express";
import moment from "moment";
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { quotes } from "./util.js";

const app = express();
const SECRET_KEY = "Softcrylic1234"
app.use(express.json());
app.use(cors())
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

// app.post("/login", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (username === "user1" && password === "pass1") {
//     res.json({
//       isLoggedIn: true,
//       token: "ruioiuytredfghujikjhgffghjkjhgfvghj",
//     });
//   } else {
//     res.json({
//       isLoggedIn: false,
//     });
//   }

//   res.send("Hello I am Login");
// });

const testFun = (req, res, next)=>{
  console.log("Middleware called");
  next();
}

const authenticate = (req, res, next)=>{
  const token = req.header("Authorization");
  try{
  const isValidToken = jwt.verify(token,SECRET_KEY)
  next();
}
  catch(err){
    res.status(401).json({error:"Not Authenticated/Incorrect Token"})
  }
}
app.post("/login",function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  console.log({username,password})

  if (username === "user1" && password === "pass1") {
    const token = jwt.sign({user: username,exp:Math.floor(Date.now() / 1000) + (60 * 60)},SECRET_KEY)
    res.json({
      isLoggedIn: true,
      token: token,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }

  res.send("Hello I am Login");
});

app.get("/getProducts",authenticate, (req, res) => {
  res.json({
    products: [
      { Name: "Cheese", Price: 2.5, Location: "Refrigerated foods" },
      { Name: "Crisps", Price: 3, Location: "the Snack isle" },
      { Name: "Pizza", Price: 4, Location: "Refrigerated foods" },
      { Name: "Chocolate", Price: 1.5, Location: "the Snack isle" },
      { Name: "Self-raising flour", Price: 1.5, Location: "Home baking" },
      { Name: "Ground almonds", Price: 3, Location: "Home baking" },
    ],
  });
});

app.get("/getOrders", authenticate,(req, res) => {
  res.json({
    orders: [
      {
        name: "John Smith",
        sku: "20223",
        price: 23.95,
        shipTo: {
          name: "Jane Smith",
          address: "123 Maple Street",
          city: "Pretendville",
          state: "NY",
          zip: "12345",
        },
        billTo: {
          name: "John Smith",
          address: "123 Maple Street",
          city: "Pretendville",
          state: "NY",
          zip: "12345",
        },
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});

//Unix or epoch timestamp
// No of seconds passed since 1 jan 1970
