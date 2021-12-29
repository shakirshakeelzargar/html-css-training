
const handleLogin=async ()=>{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username,password)

    const res = await fetch('http://localhost:3000/login',{method: 'POST',headers: {
        "Accept": "*/*",
        "Content-Type": "application/json"
      },body: JSON.stringify({
        username:username,
        password:password
    })})

    const data =await res.json()
    console.log(data)
    if(data.token){
        localStorage.setItem('token',data.token)
        window.location.href="welcome.html"
    }

    
}