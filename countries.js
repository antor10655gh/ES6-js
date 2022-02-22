const countriesList = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => countriesListDisplay(json))
}

countriesList();

const countriesListDisplay = (countryDetails) => {
    const countriesDiv = document.getElementById('countries');
    countryDetails.forEach(country => {
        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = `
        <h2>${country.name.common}</h2>
        <h4>${country.capital}</h4>
        <button class='btn' onclick="countryDetailsShow('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(container);
    })
}

const countryDetailsShow = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(response => response.json())
    .then(json => displayCountryDetails(json[0]))
}

const displayCountryDetails = countryDtls => {
    console.log(countryDtls);
    const countryDetailsDiv = document.getElementById('country-details');
    countryDetailsDiv.classList.add('container');
    countryDetailsDiv.innerHTML = `
    <h2>Name: ${countryDtls.name.common}</h2>
    <p>Population: ${countryDtls.population}</p>
    <img src='${countryDtls.flags.png}'>
    `;
    countryDetailsDiv.appendChild(divContainer);
}