const getOrders = async ()=>{
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.io)",
        "Authorization": localStorage.getItem('token')
       }
       
       const res = await fetch("http://localhost:3000/getOrders", { 
         method: "GET",
         headers: headersList
       })

       const data = await res.json()
       console.log(data)
       if(data.error){
        window.location.href='./index.html'
       }
       const productsElem = document.getElementById('orders')
       console.log(productsElem)
       const stringData = JSON.stringify(data)
       console.log(stringData)
       productsElem.textContent=stringData
}

getOrders()