const shuffleQuote = () => {
  fetch('https://www.nagekar.com//wp-json/wp/v2/pages/1240')
    .then(res => res.json())
    .then(doc => {
      let quoteElem = document.querySelector('#quote');
      const html_content = doc.content.rendered;
      const div = document.createElement('div')
      div.innerHTML = html_content;
      const quoteList = div.querySelector('ol');
      const quoteCount = quoteList.children.length;
      const randomNumber = Math.floor(Math.random() * (quoteCount + 1));
      const randomQuote = quoteList[randomNumber].innerText;
      quoteElem.innerHTML = randomQuote;
    })
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
