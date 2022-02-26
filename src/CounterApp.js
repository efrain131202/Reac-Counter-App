import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(0);



    //hanledAdd

    const hanledAdd = (e) =>{
        //setCounter( counter + 1);
        setCounter( (c) => c + 1 );
        
    }
    return(
        <>
        <h1>CounterApp</h1>
        <h2> { value} </h2>

        <button onClick={ (e) => { hanledAdd(e)}}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
     value: PropTypes.number


}

export default CounterApp;

