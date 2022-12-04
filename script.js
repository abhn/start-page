let quoteList = [];

const setQuote = quote => {
  const quoteElem = document.querySelector('#quote');
  quoteElem.innerHTML = quote;
}

const getRandomQuote = quoteList => {
  const index = Math.floor(Math.random() * quoteList.length);
  return quoteList[index];
}

const selectQuote = () => {
  const randomQuote = getRandomQuote(quoteList);

  // test if it is a nested quote
  const div = document.createElement('div');
  div.innerHTML = randomQuote;
  
  if(div.childElementCount > 0 && div.querySelector('ol')) {
    const innerQuoteList = div.querySelector('ol').children;
    const randomInnerQuote = getRandomQuote(innerQuoteList);
    setQuote(randomInnerQuote.innerText);
  }
  else {
    setQuote(randomQuote.innerText);
  }
}

const shuffleQuote = () => {
  if(quoteList.length > 0) {
    selectQuote();
  }
  else {
    fetch('https://nagekar.com//wp-json/wp/v2/pages/1240')
      .then(res => res.json())
      .then(doc => {
        const htmlContent = doc.content.rendered;
        const div = document.createElement('div')
        div.innerHTML = htmlContent;
        quoteList = div.querySelector('ol').children;
        selectQuote();
      })
  }
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
