import React from 'react';

const SelectCountry = (props) => {
    const countries = props.country;
   // console.log(countries);
    let totalPopulation = countries.reduce((initial , country)=> initial + country.population, 0);
    //console.log(totalPopulation);
    return (
        <div>

           < h4> Total population : {totalPopulation} </h4>
            
        </div>
    );
};

export default SelectCountry;