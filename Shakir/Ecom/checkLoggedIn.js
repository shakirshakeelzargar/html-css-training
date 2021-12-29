const check =()=>{
    const token = localStorage.getItem('token');
    console.log(token)
    if(!token){
        window.location.href='./index.html'
    }
}

check()