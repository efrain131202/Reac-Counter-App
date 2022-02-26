import React from 'react';
import ReactDom from 'react-dom';
//import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector('#App');

ReactDom.render( <PrimeraApp saludo= "hola mundo"/> , divRoot);