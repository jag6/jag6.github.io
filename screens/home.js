import topHeader from "../components/topHeader.js";
import { pageTitle } from "../utils.js";

const Home = {
    render: async () => {
        pageTitle.textContent = '...Of the Day APP | Home';
        
        return `
            ${topHeader.render('...Of the Day APP')}
            <canvas></canvas>
        `;
    },
    after_render:() => {}
}
//
export default Home;