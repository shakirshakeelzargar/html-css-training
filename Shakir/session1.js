const myName = "Shakir";
// console.log(myName);

const x= 1;
const y=2.5;
const z=false;
// console.log(x,y,z)
// console.log(typeof(myName))

const n=1223;
const remainder = n%2;
if(remainder==0){
    // console.log("Its even")
}
else{
    // console.log("Its odd")
}

const person = {
    name: "John",
    age: 100,
    country: 'India',
}

// console.log(person.age)

const cars = [
    "mahindra","tata","hyundai","tesla"
]

// console.log(cars[3])

const allcars = [
    {
        maker:"mahindra",
        name:"xuv",
        rpm: 5000,
        cc:1999,
        colors:["red","blue","black"],
        dealers: [
            {
                name:"asas",
                address:"",
                no:999,

            },
            {
                name:"asas",
                address:"",
                no:999,
                
            },
            {
                name:"asas",
                address:"",
                no:999,
                
            }
        ],
        key1: {
            key2:{
                name:"hello"
            }
        }

    },
    {
        maker:"tata",
        name:"nexon",
        rpm: 5000,
        cc:1999,
    },
    {
        maker:"maruti",
        name:"swift",
        rpm: 5000,
        cc:1999,
    }
]
// console.log(allcars[0].key1.key2.name)

const arr = ["shakir","nitin","reshma","aravind","vaibhav"];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element)
    
}

let num=0;
while(num<10){
    // console.log(num);
    num+=1
}

function addNumbers (x,y){
    return x+y;

}
const sum = addNumbers(2,3);
// console.log(sum);

const multiplyNum = (x,y)=>{
    return x*y;
}

// const fun = (v,i)=>{console.log(v,i)}
// arr.map(fun)

const numbers = [1,2,3,4,5,6,7,8,9,0];
const filteredArray = numbers.filter((v)=>v<5)
// console.log(filteredArray);

// console.log(arr.some((v)=>v=="fghhjkj"));

const num1=1;
const num2="1";
// console.log(num1==num2)
// console.log(num1===num2)

const arr1 = [
    {
        name:"john",
        age:70
    },
    {
        name:"meena",
        age:80
    },
    {
        name:"abdul",
        age:90
    }
]
const newarr1=arr1.filter((v)=>v.name==="john" && v.age>50)
// console.log(newarr1)


// console.log("Program Started")
// setTimeout(()=>{console.log("I am running")},3000);
// console.log("Program Finished")

// setInterval(() => {
//     console.log("I am running")
// }, 3000);

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));






