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


*/

function randRec(){

    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(function (response) {
            const data = response.data.meals[0];
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
    document.getElementById("first").innerHTML = ings.strIngredient1;
    document.getElementById("second").innerHTML = ings.strIngredient2;
    document.getElementById("third").innerHTML = ings.strIngredient3;
    document.getElementById("fourth").innerHTML = ings.strIngredient4;
    document.getElementById("fifth").innerHTML = ings.strIngredient5;


}

/*
strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5", "strIngredient6", "
strIngredient7", "strIngredient8", "strIngredient9", "strIngredient10", "strIngredient11", "strIngredient12", "strIngredient13", 
"strIngredient14", "strIngredient15", "strIngredient16", "strIngredient17", "strIngredient18", "strIngredient19", "strIngredient20",
*/

function setSteps(steps){
    document.getElementById("instructions").innerHTML = steps.strInstructions;
}

function setVideo(vid){
    document.getElementById("video").href = vid.strYoutube;
}