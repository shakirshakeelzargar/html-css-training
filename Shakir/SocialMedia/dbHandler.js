import mysql from "mysql";
import dotenv from 'dotenv';
import util from "util";

dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
});

connection.connect();

export const getPosts = async () => {
  const query = util.promisify(connection.query).bind(connection);
  const posts = await query(
    "SELECT posts.id as post_id,users.id as user_id, users.name as user_name, posts.timestamp as post_timestamp, posts.post as post from posts inner join users on posts.user_id=users.id;"
  );
  return posts;
};

export const checkLogin = async (email, password) => {
  const query = util.promisify(connection.query).bind(connection);
  const user = await query(
    `SELECT * from users where email='${email}' AND password='${password}';`
  );
  if (!!user.length) {
    return user[0];
  } else {
    return false;
  }
};

export const signUp = async (name, email, password) => {
    const query = util.promisify(connection.query).bind(connection);
    const response = await query(
      `INSERT into users (name,email,password) values ('${name}','${email}','${password}');`
    );
    return true;
  };

  export const createPost = async (post,user) => {
    const query = util.promisify(connection.query).bind(connection);
    const response = await query(
      `INSERT into posts (post,user_id,timestamp) values('${post}',${user},'${new Date()}');`
    );
    return true;
  };
  