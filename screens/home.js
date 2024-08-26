import { fetchAPI } from "../helpers/fetch.js";
import topHeader from "../components/topHeader.js";
import { hideLoading, pageTitle, showLoading } from "../utils.js";
import { getScriptures } from "../helpers/rsg.js";

const Home = {
    render: async () => {
        pageTitle.textContent = '...Of the Day APP | Home';
        showLoading();
        const catFact = await fetchAPI('https://catfact.ninja/fact');
        const uselessFact = await fetchAPI('https://uselessfacts.jsph.pl/api/v2/facts/random');
        const geekJoke = await fetchAPI('https://geek-jokes.sameerkumar.website/api?format=json');
        // const darkJoke = await fetchAPI('https://v2.jokeapi.dev/joke/Dark?type=single');
        hideLoading();
        return `
            ${topHeader.render('Random Stuff')}
            <section class="random-stuff">
                <ul>
                    <li>
                        <section><h2>CAT FACT</h2></section>
                        <p>${catFact.fact}</p>
                    </li>
                    <li>
                        <section><h2>USELESS FACT</h2></section>
                        <p>${uselessFact.text}</p>
                    </li>
                    <li>
                        <section><h2>GEEK JOKE</h2></section>
                        <p>${geekJoke.joke}</p>
                    </li>
                    <li>
                        <section><h2>SCRIPTURE</h2></section>
                        <p>Choose from any one of the following:</p>
                        <ul id="scripture-list"></ul>
                    </li>
                </ul>
            </section>
        `;
    },
    after_render:() => {
        getScriptures();
    }
}

export default Home;