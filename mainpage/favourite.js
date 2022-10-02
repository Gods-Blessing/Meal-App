


// used local storage for the dishes saved in favourites and traversing on it for showing on the viewport
if(localStorage.length>0){
    for(let k = 0; k < localStorage.length; k++){
        if(localStorage.key(k) == 'undefined'){
            localStorage.removeItem(localStorage.key(k));
            continue;
        }
        if(localStorage.key(k) != 'undefined'){
            console.log(localStorage.key(k));
        let li = document.createElement('li');
        li.setAttribute('id', localStorage.key(k));
        let imgg = document.createElement('img');
        imgg.style.width = "100px";
        imgg.style.height = "100px";
        imgg.setAttribute('src', localStorage.key(k));
        li.appendChild(imgg);

        let span = document.createElement('span');
        span.innerText = localStorage.getItem(localStorage.key(k));
        span.style.fontSize = "1.5rem";
        span.style.fontWeight = "600";
        li.appendChild(span);
        let i = document.createElement('i');
        i.setAttribute('class', "fa-solid fa-heart for-delete  localStorage.key(k)");
        i.setAttribute('id', localStorage.key(k));
        i.style.color = "red";
        i.style.marginRight = "10px";
        i.addEventListener('click', function(){
            
          localStorage.removeItem(localStorage.key(k));
          location.reload();
          if(localStorage.length == 0){
            window.location.replace('../homepage.html');
        }  
        });

        i.style.cursor = "pointer";
        li.appendChild(i);

        li.style.width = "100%";
        li.style.height = "100%";
        li.style.display = "flex";
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.marginBottom = "10px"
        li.style.border  = "2px solid black";
        li.style.padding = "10px";

        
        // document.getElementById(`${source}`).appendChild(span);
        document.getElementById('fav-list').appendChild(li);
        }
    }
} 


