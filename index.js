let imgs = document.getElementById('imgs');

let glass = document.getElementById('food-search');

let heart = document.getElementById('heart-symbol');


glass.addEventListener('click', function(){
    let inputtext = document.getElementById('searchbar').value;

    console.log(inputtext);
    let xhr = new XMLHttpRequest();

    xhr.open('get', `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputtext}`, true );
    xhr.send();
    xhr.onload = function(){
        console.log('https://www.themealdb.com/api/json/v1/1/search.php?s='+ inputtext);
        console.log(xhr.response);
        var jsonresponse = JSON.parse(xhr.response);
        imgs.setAttribute('src',jsonresponse.meals[0].strMealThumb ) ;
        
    }
});

document.getElementById('heart').addEventListener('click', function(){
    if(heart.style.color == 'black' ){
        heart.style.color = 'red';
    }else{
        heart.style.color = 'black';
    }
})



