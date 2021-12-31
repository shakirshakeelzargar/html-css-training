const getHtml=(name,post,timestamp)=>{
    return `<div class="container">
    <div class="col-md-5">
        <div class="panel panel-default">
            <div class="panel-body">
               <section class="post-heading">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="media">
                              <div class="media-left">
                                <a href="#">
                                  <img class="media-object photo-profile" src="http://0.gravatar.com/avatar/38d618563e55e6082adf4c8f8c13f3e4?s=40&d=mm&r=g" width="40" height="40" alt="...">
                                </a>
                              </div>
                              <div class="media-body">
                                <a href="#" class="anchor-username"><h4 class="media-heading">${name}</h4></a> 
                                <a href="#" class="anchor-time">${timestamp}</a>
                              </div>
                            </div>
                        </div>
                         <div class="col-md-1">
                             <a href="#"><i class="glyphicon glyphicon-chevron-down"></i></a>
                         </div>
                    </div>             
               </section>
               <section class="post-body">
                   <p>${post}</p>
               </section>
               <section class="post-footer">
                   <hr>
                   <div class="post-footer-option container">
                        <ul class="list-unstyled">
                            <li><a href="#"><i class="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-comment"></i> Comment</a></li>
                            <li><a href="#"><i class="glyphicon glyphicon-share-alt"></i> Share</a></li>
                        </ul>
                   </div>
                   <div class="post-footer-comment-wrapper">
                       <div class="comment-form">
                           
                       </div>
                       
                   </div>
               </section>
            </div>
        </div>   
    </div>
</div>`
}

const getPosts = async ()=>{
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.io)",
        "Authorization": localStorage.getItem('token')
       }
       
       const res = await fetch("http://localhost:3000/getPosts", { 
         method: "GET",
         headers: headersList
       })

       const data = await res.json()
       console.log(data)
       if(data.error){
        window.location.href='./index.html'
       }
       const elem = document.getElementById('root');
       const postsHtmlTags = data.map((post)=>{
           return getHtml(post.user_name,post.post,post.post_timestamp)
       })
       const innerHtml = postsHtmlTags.reverse().join('\n')
       elem.innerHTML=innerHtml;
}

getPosts()

const handleCreate=async ()=>{
    const post = document.getElementById("createpost").value;
    if(post.length){
    const res = await fetch('http://localhost:3000/createPost',{method: 'POST',headers: {
        "Accept": "*/*",
        "Content-Type": "application/json"
      },body: JSON.stringify({
        post:post,
        user:1
    })})

    const data =await res.json()
    console.log(data)
    location.reload();
}

    
}