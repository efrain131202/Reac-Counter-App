
import React from 'react';
// import React, { Fragment} from 'react'

const PrimeraApp = ( props ) => {

    const Saludo = 'hola mundo';

    console.log( props);

    return (
        <>
            <h1> { props.saludo} </h1>
            {/*<pre> { JSON.stringify( saludo, null, 3) } </pre>*/}
            <p> Mi Primera Aplicacion</p>
        </>
     );



}

export default PrimeraApp;