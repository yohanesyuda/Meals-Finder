import "./food-item.js"

class FoodList extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    renderError(message) {
        this.innerHTML += `${message}`;

    }

    render() {
        this.innerHTML = "";
        this._foods.forEach(food => {
            const foodItemElement = document.createElement("food-item");
            foodItemElement.food = food
            this.appendChild(foodItemElement);
        })
    }
}
customElements.define("food-list", FoodList);