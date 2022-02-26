
import React from 'react';
// import React, { Fragment} from 'react'

const PrimeraApp = () => {

    const Saludo = {
        nombre: 'Fernando',
        edad: 34
    };

    return (
        <>
            <pre> { JSON.stringify( saludo, null, 3) } </pre>
            <p> Mi Primera Aplicacion</p>
        </>
     );



}

export default PrimeraApp;