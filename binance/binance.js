//ada
    let ws  = new WebSocket("wss://stream.binance.com:9443/ws/adausdt@trade");
    let adaPrice = document.getElementById('ada');
    let lastPrice = null;

    ws.onmessage = (event) => {
	let ADAObject = JSON.parse(event.data);
	let price = parseFloat(ADAObject.p).toFixed(4);
	adaPrice.innerText = price;
	adaPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
	lastPrice = price;
    };
//eth

let ws1  = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");
let ethPrice = document.getElementById('eth');
let lastEthPrice = null;

ws1.onmessage = (event) => {
    let ETHObject = JSON.parse(event.data);
    let price = parseFloat(ETHObject.p).toFixed(4);
    ethPrice.innerText = price;
    ethPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastEthPrice = price;
};

//pols
let ws2  = new WebSocket("wss://stream.binance.com:9443/ws/polsusdt@trade");
let polsPrice = document.getElementById('pols');
let lastPolsPrice = null;

ws2.onmessage = (event) => {
    let POLSObject = JSON.parse(event.data);
    let price = parseFloat(POLSObject.p).toFixed(4);
    polsPrice.innerText = price;
    polsPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastPolsPrice = price;
};

//sol
let ws3  = new WebSocket("wss://stream.binance.com:9443/ws/solusdt@trade");
let solPrice = document.getElementById('sol');
let lastSolPrice = null;

ws3.onmessage = (event) => {
    let SOLObject = JSON.parse(event.data);
    let price = parseFloat(SOLObject.p).toFixed(4);
    solPrice.innerText = price;
    solPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastSolPrice = price;
};
//cro
let ws4  = new WebSocket("wss://stream.binance.com:9443/ws/crousdt@trade");
let croPrice = document.getElementById('cro');
let lastCroPrice = null;

ws4.onmessage = (event) => {
    let CROObject = JSON.parse(event.data);
    let price = parseFloat(CROObject.p).toFixed(4);
    croPrice.innerText = price;
    croPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastCroPrice = price;
};
