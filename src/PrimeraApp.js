
import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment} from 'react'

const PrimeraApp = ( { saludo, subtitulo = 'soy un subtitulo' }) => {

    return (
        <>
            <h1> { props.saludo} </h1>
            {/*<pre> { JSON.stringify( saludo, null, 3) } </pre>*/}
            <p> subtitulo</p>
        </>
     );

     PrimeraApp.propTypes = {
         saludo: PropTypes.string.isRequired,
         
     }

     PrimeraApp.defaultProps = {

        subtitulo: 'soy un subtitulo',
     }




}

export default PrimeraApp;