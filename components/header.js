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
                    <li>
                        <a href="/#/">HOME</a>
                    </li>
                    <li>
                        <a href="/#/nasa">NASA</a>
                    </li>
                    <li>
                        <a href="/#/wotd">WOTD</a>
                    </li>
                    <li>
                        <a href="/#/crypto">CRYPTO</a>
                    </li>
                </ul>
            </nav>
        `;
    }
});