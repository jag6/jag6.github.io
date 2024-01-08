import { CryptoTicker } from "../classes/crypto.js";
import topHeader from "../components/topHeader.js";
import { pageTitle } from "../utils.js";

const CryptoScreen = {
    render: () => {
        pageTitle.textContent = 'Crypto Price Ticker'
        return `
            ${topHeader.render('BTC Price Ticker')}
            <div class="crypto-container">
                <div class="crypto-ticker-container">
                    <canvas class="crypto-ticker"></canvas>
                </div>
                <div class="crypto-ticker-btns">
                    <ul>
                        <li><button id="btc-btn">BITCOIN</button></li>
                        <li><button id="eth-btn">ETH</button></li>
                        <li><button id="ada-btn">ADA</button></li>
                        <li><button id="sol-btn">SOL</button></li>
                    </ul>
                </div>
            </div>
        `;
    },
    after_render: () => {
        let ticker = CryptoTicker.Ticker('BTC');
        ticker;
        const cryptoHeader = document.querySelector('h1');
        const clearCanvas = () => {
            document.querySelector('canvas').remove();
            const container = document.querySelector('.crypto-ticker-container');
            container.insertAdjacentHTML('afterbegin', '<canvas></canvas>');
        }
        // Switch to BTC Ticker
        const toggleTickers = (btn, label) => {
            const tickerBtn = document.getElementById(btn);
            tickerBtn.addEventListener('click', () => {
                clearCanvas();
                cryptoHeader.textContent = `${label} Price Ticker`;
                ticker = CryptoTicker.Ticker(`${label}`);
            });
        }
        toggleTickers('btc-btn', 'BTC');
        toggleTickers('eth-btn', 'ETH');
        toggleTickers('ada-btn', 'ADA');
        toggleTickers('sol-btn', 'SOL');
    }
}

export default CryptoScreen;