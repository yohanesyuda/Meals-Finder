class FoodItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `
    <style>
    .food-item {
        background: #fff;
        border: 0.5px solid #fafafa;
        border-radius: 10px;
        overflow: hidden;
        margin: 35px 0;
    }
    
    .food-item:hover {
        box-shadow:
            0px 0px 3px rgba(0, 0, 0, 0.015),
            0px 0px 24px rgba(0, 0, 0, 0.03);
        transition: all 0.5s linear;
    }
    
    .food-img img {
        width: 100%;
        display: block;
        padding: 10px;
        border-radius: 20px;
    }
    
    .food-name {
        padding: 1.5rem 0.5rem;
    }
    
    .food-name h3 {
        font-size: 25px;
        font-weight: 700;
    }
    
    .food-name p {
        padding: 1rem 1.5rem;
        text-align: justify;
        color: var(--small-font);
    }
    </style>
    
    <div class="food-item">
        <div class="food-img">
            <img src="${this._food.strMealThumb}" alt="${this._food.strMeal}">
        </div>
            <div class="food-name">
              <h3>${this._food.strMeal}</h3>
              <p>${this._food.strInstructions}</p>
            </div>
        </div>`


    }
}

customElements.define("food-item", FoodItem);