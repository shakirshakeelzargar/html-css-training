import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from 'dotenv';
import { signUp, getPosts, checkLogin, createPost } from "./dbHandler.js";
dotenv.config();
const app = express();
const SECRET_KEY = "Softcrylic1234";
app.use(express.json());
app.use(cors());

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  try {
    const isValidToken = jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).json({ error: "Not Authenticated/Incorrect Token" });
  }
};

app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await checkLogin(email, password);

  if (user) {
    const token = jwt.sign(
      {
        email: email,
        name: user.name,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      SECRET_KEY
    );
    res.json({
      isLoggedIn: true,
      token: token,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});

app.post("/signUp", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.password;
  const response = await signUp(name, email, password);

  if (response) {
    res.json({
      success: true,
    });
  }
});

app.post("/createPost", async function (req, res) {
  const post = req.body.post;
  const user = req.body.user;
  const response = await createPost(post,user);

  if (response) {
    res.json({
      success: true,
    });
  }
});

app.get("/getPosts", authenticate, async function (req, res) {
  const posts = await getPosts();
  res.json(posts);
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
