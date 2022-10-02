var ball = document.getElementById('ball');
var body = document.getElementById('body');

// using session storage to show the details of dish searched on homepage
if(sessionStorage.length == 2){
    inputtext = sessionStorage.key(1);
}
var jsonresponsee;


var xhrr = new XMLHttpRequest();
xhrr.open('get', `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputtext}`, true);
xhrr.send();
xhrr.onload = function(){
    jsonresponsee = JSON.parse(xhrr.response);
    console.log(jsonresponsee);
    if(jsonresponsee.meals == null){
        location.reload();
    }
    // setting attr for the img
    document.getElementById('imggg').setAttribute('src', jsonresponsee.meals[0].strMealThumb);
    // setting name for the dish
    document.getElementById('nameofdish').innerText = jsonresponsee.meals[0].strMeal;
    // setting name for the category dish comes in like veg/non-veg
    document.getElementById('categoryofdish').innerText = jsonresponsee.meals[0].strCategory;
    // seeting area where it is popular or originated
    document.getElementById('area').innerText = jsonresponsee.meals[0].strArea;
    // providing with the youtube link
    document.getElementById('youtubelink').innerText = jsonresponsee.meals[0].strYoutube;
    document.getElementById('youtubelink').setAttribute('href', jsonresponsee.meals[0].strYoutube);
    // when youtube link clicked the video should open in new tab
    document.getElementById('youtubelink').setAttribute('target', '_blank');


    // list of ingredients
    var a = jsonresponsee.meals[0];
     var ing = Object.keys(a).filter((key) => key.includes("strIngredient")).reduce((obj, key) => {
        return Object.assign(obj, {
         [key]: a[key]});}, {});
      if(Object.values(ing) != ''){
    //   console.log(Object.values(ing));
    };

    // getting all the ingredients measure 
    var qty = Object.keys(a).filter((key) => key.includes("strMeasure")).reduce((obj, key) => {
        return Object.assign(obj, {
         [key]: a[key]});}, {});
      if(Object.values(qty) != ''){
    //   console.log(Object.values(qty));
    };
    

    // adding all the Ingredients and Measure of ingredients in the list
    for (let name in Object.values(ing)) {
        if(Object.values(ing)[name] != "" && Object.values(ing)[name] != null){
            let ele = document.createElement('li');
            ele.style.width = "100%";
            ele.style.fontSize = "1.2em"
            ele.style.marginBottom = "25px";
            ele.innerText = Object.values(ing)[name] + "  ---  " + Object.values(qty)[name];
            document.getElementById("ingredients-list").appendChild(ele);
            // console.log(Object.values(ing)[name]);
        }
        
    }


// some experiments
    // Object.values(ing).forEach((ing1, qty1) => {
    //     const g = Object.values(qty)[qty1];
    //     const l = Object.values(ing)[ing1];
    //     console.log(ing1, g);
    //     if(Object.values(ing)[ing1] != ''){
    //                 let ele = document.createElement('li');
    //                 ele.style.width = "100%";
    //                 ele.style.fontSize = "1.2em"
    //                 ele.innerText = l;

    //                 let space = document.createElement('span');
    //                 space.textContent = "-";
    //                 space.style.marginLeft = "10px";
    //                 ele.appendChild(space);

    //                 let span = document.createElement('span');
    //                 span.innerText = g;
    //                 span.style.marginLeft = "10px";
    //                 ele.appendChild(span);
    //                 document.getElementById("ingredients-list").appendChild(ele);
    //                 // console.log(Object.values(ing)[ing1]);
    //             }
    // });

    // added the instructions for cooking 
    document.getElementById('instructions-p').innerText = jsonresponsee.meals[0].strInstructions;
};



// added dark theme switch
var tf = true;
ball.addEventListener('click', function(){
    if(tf == true){
        ball.style.backgroundColor = "white";
        document.getElementById("containing-ball").style.borderColor = "white";
        ball.style.marginLeft = "35.3px";
        body.style.backgroundColor = "rgb(35, 34, 34)";
        body.style.color = "white";
        document.getElementById('details').style.borderColor = "grey";
        document.getElementById('instructions').style.borderColor = "grey";
        tf = false;
    }else{
        tf = true;
        document.getElementById("containing-ball").style.borderColor = "black";
        ball.style.marginLeft = "0px";
        ball.style.backgroundColor = "black";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        document.getElementById('details').style.borderColor = "black";
        document.getElementById('instructions').style.borderColor = "black";
        
    }
});

