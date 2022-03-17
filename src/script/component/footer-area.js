class FooterArea extends HTMLElement {


    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
        footer {
            padding: 15px;
            background-color: var(--accent-1);
        }
        
        footer p {
            margin-bottom: 0;
            color: #ffffff;
            text-align: center;
        }
        </style>
        <p> © 2022 ∣ All Rights Reserved <b>yohanesbyp</b></p>`
    }
}

customElements.define("footer-area", FooterArea);