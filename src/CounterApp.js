import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    //hanledAdd

    const hanledAdd = (e) =>{
        console.log(e)
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

