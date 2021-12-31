
const handleLogin=async ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    const res = await fetch('http://localhost:3000/login',{method: 'POST',headers: {
        "Accept": "*/*",
        "Content-Type": "application/json"
      },body: JSON.stringify({
        email:email,
        password:password
    })})

    const data =await res.json()
    console.log(data)
    if(data.token){
        localStorage.setItem('token',data.token)
        window.location.href="welcome.html"
    }

    
}