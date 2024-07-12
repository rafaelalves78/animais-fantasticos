export default function initFetchBitcoin() {}

//https://blockchain.info/ticker

fetch("https://blockchain.info/ticker")
  .then((response) => response.json())
  .then((btc) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / btc.BRL.sell).toFixed(4);
  })
  .catch((err) => {
    console.log(err);
  });
