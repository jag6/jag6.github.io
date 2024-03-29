customElements.define('header-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <header>
                <div><img></img></div>
                <nav-component></nav-component>
            </header>
        `;
    }
});

customElements.define('nav-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="/#/">＃</a></li>
                    <li><a href="/#/nasa">NASA</a></li>
                    <li><a href="/#/language-learning">日本語</a></li>
                    <li><a href="/#/crypto">CRYPTO</a></li>
                </ul>
            </nav>
        `;
    }
});