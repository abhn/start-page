const shuffleQuote = () => {
  fetch('https://www.nagekar.com/quotes.txt')
    .then(res => res.text())
    .then(quotes => {
      let quoteElem = document.querySelector('#quote');
      let quoteArr = quotes.split('\n');
      let index = Math.round(Math.random() * quoteArr.length);
      quoteElem.innerHTML = quoteArr[index];
    });
}

const tick = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const today  = new Date();
  const timeElem = document.querySelector('time');
  timeElem.innerHTML = today.toLocaleString('en-UK', options);
}

shuffleQuote();
tick();
setInterval(tick, 1000);
setInterval(shuffleQuote, 60000);
