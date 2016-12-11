var xbtc = new XMLHttpRequest();
xbtc.open('GET', 'https://api.bitcoinaverage.com/ticker/global/USD/', true);
xbtc.onreadystatechange = function () {
	if (xbtc.readyState == 4) {
		var ticker = JSON.parse(xbtc.responseText);
		var price = ticker.last;
		cosument.getElementById('btc').innerHTML = "$" + price;
	}	
};

xbtc.send();