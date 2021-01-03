import React from 'react';
import './Country.css';
const Country = (props) => {

    const {name,population , region ,flag} = props.country;
    const countryStyle = {border: '1px solid black' , borderRadius:'10px' , padding:'20px', marginBottom : '10px'};

    return (
        <div style={countryStyle}>
            <h2>{name}</h2>
            <p>Here Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <img src={flag} alt="" style={{height : '100px' , width : '200px'}}/>
            <br/>
            <button onClick={()=>props.handleAddPeople(props.country)}>Add Pepole</button>
        </div>
    );
};

export default Country;