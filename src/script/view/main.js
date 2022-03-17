import "../component/food-list.js"
import "../component/search-box.js"
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-box");
    const foodListElement = document.querySelector("food-list");

    const onButtonSearchClicked = () => {
        DataSource.searchIngredient(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        foodListElement.foods = results;
    };

    const fallbackResult = message => {
        alert(message)
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;