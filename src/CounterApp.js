import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value );



    //hanledAdd

    const hanledAdd = (e) =>{
        //setCounter( counter + 1);
        setCounter( (c) => c + 1 );
    const hanledSubstract = (e) =>{ setCounter( counter - 1 );

    const hanledReset = (e) =>{ setCounter( value );

        
    }
    return(
        <>
        <h1>CounterApp</h1>
        <h2> { value} </h2>

        <button onClick={ (e) => { hanledAdd(e)}}>+1</button>
        <button onClick={ () => hanledReset }>Reset</button>
        <button onClick= { () => hanledSubstract( counter + 1)}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
     value: PropTypes.number


}

export default CounterApp;

