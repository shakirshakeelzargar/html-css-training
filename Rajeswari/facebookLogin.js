function login(){
    const username='rajeswari';
    const password='raji123';
    if(document.getElementById("username").value==username && document.getElementById("password").value==password ){
        window.location.href="welcome.html"
    
    }
    else{
        alert("username or password incorrect")
    }
}
function facebookLogin(){
let isvalidUser = false;
const listOfUsers=[{username:'raji', password:'raji123'},{username:'srini',password:'srini123'}];
listOfUsers.forEach((element,index) => {
    if(document.getElementById("username").value==element.username && document.getElementById("password").value==element.password ){
      isvalidUser = true;   
    
    }
})
if (isvalidUser){
    window.location.href="welcome.html"
}
else{
    alert("username or password incorrect")
}}