import { cryptoTicker } from "../helpers/crypto.js";
import topHeader from "../components/topHeader.js";
import { pageTitle } from "../utils.js";

const CryptoScreen = {
    render: () => {
        pageTitle.textContent = 'Crypto Price Ticker';
        return `
            ${topHeader.render('BTC Price Ticker')}
            <div class="crypto-container">
                <div class="crypto-ticker-container">
                    <canvas class="crypto-ticker"></canvas>
                </div>
                <div class="crypto-ticker-btns">
                    <ul>
                        <li><button id="btc-btn" aria-label="Display Bitcoin Ticker Button">BITCOIN</button></li>
                        <li><button id="eth-btn" aria-label="Display Ethereum Ticker Button">ETH</button></li>
                        <li><button id="ada-btn" aria-label="Display Cardano Ticker Button">ADA</button></li>
                        <li><button id="sol-btn" aria-label="Display Solana Ticker Button">SOL</button></li>
                    </ul>
                </div>
            </div>
        `;
    },
    after_render: () => {
        let ticker = cryptoTicker('BTC');
        ticker;
        const cryptoHeader = document.querySelector('h1');
        const clearCanvas = () => {
            document.querySelector('canvas').remove();
            const container = document.querySelector('.crypto-ticker-container');
            container.insertAdjacentHTML('afterbegin', '<canvas></canvas>');
        }
        const toggleTicker = (btn, label) => {
            const tickerBtn = document.getElementById(btn);
            tickerBtn.addEventListener('click', () => {
                clearCanvas();
                cryptoHeader.textContent = `${label} Price Ticker`;
                ticker = cryptoTicker(`${label}`);
            });
        }
        const coins = [['btc-btn', 'BTC'], ['eth-btn', 'ETH'], ['ada-btn', 'ADA'], ['sol-btn', 'SOL']];
        for(let i = 0; i < coins.length; i++) {
            toggleTicker(coins[i][0], coins[i][1])
        }
    }
}

export default CryptoScreen;