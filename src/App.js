import './App.css';
import React ,{useState, useEffect} from 'react'
import Country from './components/Country/Country';
function App() {

 const [countries , setCountries] =  useState([]);

 const handleAddPeople = (country)=>{
               console.log('Allah is one',country);
 }

 useEffect(()=>{
                  fetch('https://restcountries.eu/rest/v2/all')
                  .then(res => res.json())
                  .then(data => setCountries(data))
                  .catch(error => console.log(error))
 },[])
          
  return (
    <div className="App">
            <h4>countries :  {countries.length}</h4>
           {countries.map(country =><Country country={country} handleAddPeople={handleAddPeople} key={country.alpha3Code}></Country>)}
    </div>
  );
}

export default App;
