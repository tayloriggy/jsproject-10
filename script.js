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




*/

function newRandRec(){
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php/idMeal")
        .then(function (response) {
            console.log(response);
        })

}