/*
Project 10: Create a Recipe App by integrating the "TheMealDB" API's random recipe endpoint.

Requirements:
-Create a Github repository for this project. 
-When the page first loads, it should display a random recipe, complete with a picture of the meal, 
 name of the meal, a button to watch the YouTube video, and the instructions of how to make the meal, along with the list of ingredients.
-When a user clicks a button called "new recipe", it should show a new random and update the content on the page using JavaScript.

Steps:
1. When the page first loads, display a random recipe with a button to watch YouTube video
2. Create a button called "new recipe"
3. When user clicks button "new recipe", display a new random recipe from the MealDB API endpoint/URL

-create a specific function for each task i want to achieve, such as setting recipe title and displaying it to UI
-call each function within newRandRec(data) 
-call function newRandRec(data) at end to reset webpage for new rand rec with onclick event on "new recipe" button
-use inner.HTML to push each key value to UI
-define empty tag shells in html and set ID to each to grab id with getElementById 
-in setIngredients(), use for loop to loop through each number behind strIngredient and then create li element 
which then gets appended to UI via the ul element's id

*/

const body = document.body; //these two lines handle onload event for when page initally loads and/or is refreshed
body.onload = randRec;


function randRec(){

    axios.get("https://www.themealdb.com/api/json/v1/1/random.php") //using axios JS library to make GET request from mealdb API endpoint
        .then(function (response) {
            const data = response.data.meals[0]; //creating a var called data and setting it to the response(API endpoint line 26), represents
            // the data object, then meals object at index 0 which is the data we're after
            setRecipeTitle(data);
            setImage(data);
            setIngredients(data);
            setSteps(data);
            setVideo(data);
        });

}

function setRecipeTitle(recipe){
    document.getElementById("title").innerHTML = recipe.strMeal;
}

function setImage(image){
    document.getElementById("image").src = image.strMealThumb;
}

function setIngredients(ings){
    for (let i = 1; i <=20; i++){ //using for loop to loop through all values 1-20 in strIngredient keys in mealDB
        const ingredientKey = "strIngredient" + i; //defining variable and setting it equal to the strIngredient key
        let li = document.createElement("LI"); //creating li element
        li.innerHTML = ings[ingredientKey]; //setting li element to html and making it equal to parameter ings and accessing key through variable by using bracket notation 
        document.getElementById("listIngredients").appendChild(li); //appending li element to ul element in UI
    }
}

function setSteps(steps){
    document.getElementById("instructions").innerHTML = steps.strInstructions;
}

function setVideo(vid){
    document.getElementById("video").href = vid.strYoutube;
}