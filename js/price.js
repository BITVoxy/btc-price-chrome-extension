var btcg = new XMLHttpRequest();
btcg.open('GET', 'https://api.coinmarketcap.com/v1/ticker/bitcoin-gold/', true);
btcg.onreadystatechange = function() {
  if (btcg.readyState == 4) {
    var ticker = JSON.parse(btcg.responseText);
    var btcgp = ticker[0];
    var price = btcgp.price_usd;
    document.getElementById('btg-title').innerHTML = btcgp.name  + " Price";
    document.getElementById('btg').innerHTML = "$" + price;
  }
};

btcg.send();
