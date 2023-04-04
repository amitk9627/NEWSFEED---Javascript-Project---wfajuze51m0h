alert("please press yellow button and wait for result");
function loadAuthorName(){
    let parentElement=document.getElementById('author-card');
    fetch('https://inshorts.deta.dev/news?category=science').then((respond)=>{
      return respond.json();
    }).then((res)=>{
      for(let obj of res.data){
        let div= document.createElement('div');
            div.className="card";
       // author name
        let authorElement = document.createElement('h1');
        let authorNode = document.createTextNode("by "+obj['author']);
        authorElement.appendChild(authorNode);
        div.appendChild(authorElement);
        // content
        let headingElement = document.createElement('p');
        let textNode = document.createTextNode(obj['content']);
        headingElement.appendChild(textNode);
        div.appendChild(headingElement);
        let likebtn = document.createElement('p');
            
            let i=document.createElement('i');
            
            i.classList.add("fa-duotone","fa-heart","grey");
            i.setAttribute('onclick','likechng()');

            likebtn.appendChild(i);
        div.appendChild(likebtn);
        parentElement.appendChild(div);
        console.log(parentElement);
        
        
      }
    })
  }
  //loadAuthorName();
