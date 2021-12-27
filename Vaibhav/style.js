const handleLogin =()=>{
    const user = "Vaibhav"
    const pass = "pass"
    let usernameElem = document.getElementById('username')
    let passwordElem = document.getElementById('pass')

    if(usernameElem.value === user && passwordElem.value===pass){
        
        location.href="Welcome.html"
        // let parentDiv = getElementById('welcome')
        // const logoutButton = document.createElement('button')
        // logoutButton.id="logout-btn"
        // logoutButton.textContent="Logout"
        // parentDiv.appendChild(logoutButton)
        // logoutButton.onclick=()=>{
        //     location.href="index.html"
        // }
        
    }
    // console.log("I am clicked")
}

// const handleLogout = ()=>{
//     location.href="index.html"
//     console.log("I am clicked")
// }