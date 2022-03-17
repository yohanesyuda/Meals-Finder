class SearchBox extends HTMLElement {


    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search-input").value;
    }

    render() {
        this.innerHTML = `
        <style>
        .search-box {
            margin-top: 3rem;
            display: flex;
            align-items: stretch;
        }
        
        .search-control,
        .search-btn {
            width: 100%;
        }
        
        .search-control {
            padding: 0 1rem;
            font-size: 1.1rem;
            font-family: inherit;
            outline: 0;
            border: 1px solid #eeeeee;
            color: var(--secondary);
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }
        
        .search-btn {
            width: 130px;
            height: 55px;
            font-size: 1.8rem;
            background: var(--accent-1);
            color: #fff;
            border: none;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }
        
        .search-btn:hover {
            background: var(--secondary);

        </style>

        <div class = "search-box">
        <input type="text" class="search-control" placeholder="Search meal" id="search-input">
        <button type="button" class="search-btn" id="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </div>`
        this.querySelector("#search-btn").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-box", SearchBox);