let imgs = document.getElementById('imgs');

let glass = document.getElementById('food-search');

let heart = document.getElementById('heart-symbol');

let lis = document.querySelectorAll('li');
let inputtext;
var foodname;
var source;


// -------------------------------------------------------------------------------------------

// search bar auto suggestion
if(document.getElementById('searchbar')){
document.getElementById('searchbar').addEventListener('keyup', function(){
    
    // if auto suggestions has child and we need different list , clearing the previous auto dish list
    if(document.getElementById('suggestions').hasChildNodes()){
        let parent = document.getElementById('suggestions');
        while(parent.firstChild){
            parent.firstChild.remove();
        }
        // console.log(parent.childElementCount);
        document.getElementById('suggestions').style.boxShadow = "0px 0px 0px 0px ";

    };
    

    // when key is pressed we insert elements for auto suggestions
    if(document.getElementById('searchbar').value != ""){
        let xhrbyfrstletter = new XMLHttpRequest();   
    xhrbyfrstletter.open('get', `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.getElementById('searchbar').value}`, true );
    xhrbyfrstletter.send();
    xhrbyfrstletter.onload = function(){
            var jsonresponsefrstltr = JSON.parse(xhrbyfrstletter.response);
            console.log(jsonresponsefrstltr);
            let alldish = jsonresponsefrstltr.meals;
            // Object.values(jsonresponsefrstltr.meals[i].strMeal);
            for (let i = 0; i < 6; i++) {
                // created element and inserted them to auto suggestions list
                let lii = document.createElement('li');
                lii.innerText = jsonresponsefrstltr.meals[i].strMeal;
                lii.setAttribute('class' ,'suggestionlii');
                lii.addEventListener('mouseover', function(){
                    lii.style.backgroundColor = "#bfbfbf";
                });

                lii.addEventListener('mouseleave', function(){
                    lii.style.backgroundColor = "white";
                });

                lii.addEventListener('click', function(){
                    document.getElementById('searchbar').innerText = lii.innerText;
                    document.getElementById('searchbar').value = lii.innerText;
                    if(document.getElementById('suggestions').hasChildNodes()){
                        let parent = document.getElementById('suggestions');
                        while(parent.firstChild){
                            parent.firstChild.remove();
                        }
                        // console.log(parent.childElementCount);
                    };
                })

                lii.style.cursor = 'pointer';
                lii.style.height = "50px";
                lii.style.backgroundColor = "white";
                lii.style.borderRadius = "10px 10px 10px 10px"
                lii.style.display = "flex";
                lii.style.justifyContent = "center";
                lii.style.alignItems = "center";

                document.getElementById('suggestions').appendChild(lii);
                document.getElementById('suggestions').style.listStyle = "none";
                document.getElementById('suggestions').style.boxShadow = "0px 0px 1px 1px grey";
                
                console.log(jsonresponsefrstltr.meals[i].strMeal);
            }
        };
    };
});
};




// ----------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------- 


// search happens when we click on the magnifying glass
if(glass){
    glass.addEventListener('click', function(){
        inputtext = document.getElementById('searchbar').value;
        sessionStorage.clear();
    
        console.log(inputtext);
        let xhr = new XMLHttpRequest();
    
        xhr.open('get', `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputtext}`, true );
        xhr.send();
        xhr.onload = function(){
            var jsonresponse = JSON.parse(xhr.response);
            console.log(jsonresponse);

            // setting the attribute for image
            imgs.setAttribute('src',jsonresponse.meals[0].strMealThumb ) ;
            source = jsonresponse.meals[0].strMealThumb;
            foodname = jsonresponse.meals[0].strMeal;

            console.log(source);
            console.log(foodname);
            console.log(`${source}`);

            // using local storage for storing the favourite dish list
            if(localStorage.getItem(source)){
                
                heart.style.color = 'red';
            }else{
                heart.style.color = 'black';
            };
            sessionStorage.setItem(foodname, true);
            console.log(sessionStorage);
        };
    
        
    
    });
};


// -------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------

// adding dishes to favourite list
if(document.getElementById('heart')){
document.getElementById('heart').addEventListener('click', function(){
    // adding items to favourites list and using local storage for storing the list of favourite items
        if(heart.style.color == 'black'  ){
            heart.style.color = 'red';
            if(!localStorage.getItem(`${source}`)){
                console.log(`${source}`);
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

};

// ---------------------------------------------------------------------


// ---------------------------------------------------------------

// not allowing the user to access the favourites page when the list is empty
if(document.getElementById("list-link")){
    document.getElementById("list-link").addEventListener('click', function(){
        if(localStorage.length > 0){
            document.getElementById("list-link").setAttribute('href', './mainpage/favourite.html');
        }else{
            document.getElementById("list-link").setAttribute('href', '#');
            window.alert("Your Favourites list is empty");
        }
    });
};

if(document.getElementById('heartss')){
    document.getElementById('heartss').addEventListener('click', function(){
        document.getElementById('heartss').setAttribute('href', './details/details.html');
    })
}



