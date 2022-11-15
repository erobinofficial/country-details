const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = (countries) =>{
    const countryList = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>Capital: ${country.capital}</br>
        Continent: ${country.continents}</p>
        <button onclick = "loadCountryByName('${country.name.common}')";>see more</button>
        `;
        countryList.appendChild(div);
    })
}

const loadCountryByName = (name) =>{
    const url =`https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0])) 
}
const displayCountryDetails = country =>{
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h5>Official Name: ${country.name.official}</h>
    <p>Border: ${country.borders}</p>
    <p>Time zone: ${country.timezones}</p>
    <p>Region: ${country.region}</p>
    <img width="100px" src="${country.flags.svg}">
    `;
};