const currencyLoad = () => {
    fetch('https://restcountries.com/v3.1/all?fbclid=IwAR2kTpWvCcJiyJ4FM0PK_KqpxJ-9TtiiaB6-qj2OkyAfnlSZHScr66Z2ZSk')
    .then(response => response.json())
    .then(json => showCurrency(json));
}

const showCurrency = currency => {
    console.log(currency);
    const containerDiv = document.getElementById('container');
    for(const money of currency){
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${money.currencies.EUR.name}</h2>
        <h4>${money.currencies.EUR.symbol}</h4>
        `;
        containerDiv.appendChild(div);
    }
}