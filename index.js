let imgs = document.getElementById('imgs');

let glass = document.getElementById('food-search');

let heart = document.getElementById('heart-symbol');

let lis = document.querySelectorAll('li');

var foodname;

var source;

console.log(localStorage);

glass.addEventListener('click', function(){
    let inputtext = document.getElementById('searchbar').value;

    console.log(inputtext);
    let xhr = new XMLHttpRequest();

    xhr.open('get', `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputtext}`, true );
    xhr.send();
    xhr.onload = function(){
        // console.log(xhr.response);
        var jsonresponse = JSON.parse(xhr.response);
        imgs.setAttribute('src',jsonresponse.meals[0].strMealThumb ) ;
        source = jsonresponse.meals[0].strMealThumb;
        foodname = jsonresponse.meals[0].strMeal;
        console.log(foodname);
        console.log(`${source}`);
        if(localStorage.getItem(`${source}`)){
            
            heart.style.color = 'red';
        }else{
            heart.style.color = 'black';
        }
    };

    

});



document.getElementById('heart').addEventListener('click', function(){
    if(heart.style.color == 'black' ){
        heart.style.color = 'red';

        let li = document.createElement('li');
        li.setAttribute('id', `${source}`);
        let imgg = document.createElement('img');
        imgg.style.width = "100px";
        imgg.style.height = "100px";
        imgg.setAttribute('src', `${source}`);
        li.appendChild(imgg);

        let span = document.createElement('span');
        span.innerText = foodname;

        li.appendChild(span);
        // document.getElementById(`${source}`).appendChild(span);
        document.getElementById('fav-list').appendChild(li);
        
        if(!localStorage.getItem(`${source}`)){
            heart.style.color = 'red';
            localStorage.setItem(`${source}`, foodname);
            console.log(localStorage.getItem(`${source}`));
        }
       
    }else{
        heart.style.color = 'black';
        localStorage.removeItem(`${source}`);
        document.getElementById(`${source}`).remove();
        
        
    }
});


