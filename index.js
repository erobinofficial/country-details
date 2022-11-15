const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = (countries) =>{
    const countryList = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country.name);
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerHTML = country.name.official;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerHTML = `Capital: ${country.capital}</br>
        Region:${country.region}</br>
        Flag: ${country.flags.png}</br>
        Continent: ${country.continents}`;
        div.appendChild(p);
        countryList.appendChild(div);
    })
}