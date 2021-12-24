const fun1 = () => {
  console.log("This is fun1");
};

const fun2 = (callback) => {
  console.log("This is fun2");
  callback();
};

// fun2(fun1)

// const p1 = new Promise((res, rej) => {
//   res("HelloWorld");
// });

// const p2 = new Promise((res, rej) => {
//   res("HelloWorld222");
// });

// p1.then((e) => {
//   console.log(e);
//   p2.then((e) => {
//     console.log(e);
//   });
// });

const users = ["john", "vaibhav", "shakir", "aravind"];
const userDetails = {
  john: {
    address: "usa",
    phone: 999,
  },
  vaibhav: {
    address: "india",
    phone: 123,
  },
};

const getUsers = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(users[0]);
    }, 2000);
  });
};

const getDetails = (user) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(userDetails[user]);
    }, 2000);
  });
};

// getUsers().then((user) => {
//   console.log(user);
//   getDetails(user).then((details) => {
//     console.log(details);
//   });
// });
// console.log("Finished");

// async/ await

const getApiData = async ()=>{
    const user = await getUsers();
    const userDetails = await getDetails(user)
    console.log(user)
    console.log(userDetails)
}

// getApiData();

const currentDate = new Date();
console.log(currentDate)


