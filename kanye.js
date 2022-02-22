const quotesLoad = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(json => displayQuotes(json))
}

const displayQuotes = (data) => {
    const quotesDiv = document.getElementById('quotes');
    const quote = document.createElement('blockquote');
    quote.classList.add('quotesBlock');
    quote.innerText = data.quote;
    quotesDiv.appendChild(quote);
}