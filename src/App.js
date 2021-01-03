import './App.css';
import React ,{useState, useEffect} from 'react'
import Country from './components/Country/Country';
import SelectCountry from './components/SelectCountry/SelectCountry';
function App() {

 const [countries , setCountries] =  useState([]);
 const [selectCountry , setSelectCountry] = useState([]);

 const handleAddPeople = (country)=>{
              const newCountry = [...selectCountry , country];
              setSelectCountry(newCountry);
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
            <h4>Select Country : {selectCountry.length}</h4>
            <SelectCountry country ={selectCountry}/>
           {countries.map(country =><Country country={country} handleAddPeople={handleAddPeople} key={country.alpha3Code}></Country>)}
         
    </div>
  );
}

export default App;
