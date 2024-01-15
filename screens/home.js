import { fetchAPI } from "../helpers/fetch.js";
import topHeader from "../components/topHeader.js";
import { pageTitle } from "../utils.js";
import { key, value } from "../data/rsg.js";

const Home = {
    render: async () => {
        pageTitle.textContent = '...Of the Day APP | Home';
        const catFact = await fetchAPI('https://catfact.ninja/fact');
        const boredFix = await fetchAPI('https://www.boredapi.com/api/activity');
        const uselessFact = await fetchAPI('https://uselessfacts.jsph.pl/api/v2/facts/random');
        const geekJoke = await fetchAPI('https://geek-jokes.sameerkumar.website/api?format=json');
        const darkJoke = await fetchAPI('https://v2.jokeapi.dev/joke/Dark?type=single');
        
        return `
            ${topHeader.render('Random Stuff')}
            <section class="random-stuff">
                <ul>
                    <li>
                        <section><h2>CAT FACT</h2></section>
                        <p>${catFact.fact}</p>
                    </li>
                    <li>
                        <section><h2>BORED?</h2></section>
                        <p>${boredFix.activity}.</p>
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
                        <section><h2>DARK JOKE</h2></section>
                        <p>${darkJoke.joke}</p>
                    </li>
                    <li>
                        <section><h2>SCRIPTURE</h2></section>
                        <p>Please read ${key} ${value}.</p>
                    </li>
                </ul>
            </section>
        `;
    },
    after_render:() => {}
}

export default Home;