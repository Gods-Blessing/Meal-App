let imgs = document.getElementById('imgs');

let btn = document.getElementById('button');

btn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();

    xhr.open('get', 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata' );
    xhr.send();
    xhr.onload = function(){
        console.log(xhr.response);
        var jsonresponse = JSON.parse(xhr.response);
        imgs.setAttribute('src',jsonresponse.meals[0].strMealThumb ) ;
        

    }
})



