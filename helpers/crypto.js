export const cryptoTicker = (label) => {
    const ctx = document.querySelector('canvas').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // This will be populated with timestamps
            datasets: [{
                data: [], // This will be populated with trade prices
                label: `${label}/USD`,
                borderColor: '#4BA5FA',
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: `Real-Time ${label}/USD Trade Prices`
            }
        }
    });

    const socket = new WebSocket('wss://ws.coinapi.io/v1/');
    socket.onopen = () => {
        socket.send(JSON.stringify({
            "type": "hello",
            "apikey": "F1779675-5E2B-4C74-A82D-D89646D0A0AB",
            "subscribe_data_type": ["trade"],
            "subscribe_filter_asset_id": [`${label}`],
            "subscribe_filter_symbol_id": ["BITSTAMP_SPOT_BTC_USD$", "BITFINEX_SPOT_BTC_LTC$"]
        }));
    };
    socket.onmessage = (e) => {
    
        const data = JSON.parse(e.data);
        
        // Add new data to the chart
        chart.data.labels.push(data.time_exchange);
        chart.data.datasets[0].data.push(data.price);
        
        // Remove the oldest data point if there are more than 50
        if (chart.data.labels.length > 50) {
            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
        }
        
        // Update the chart
        chart.update();
    };
    
    socket.onerror = (error) => {
        console.log(`WebSocket error: ${error}`);
    };
}