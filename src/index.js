import React from 'react';
import ReactDom from 'react-dom';

const saludo = <h1>Hola mundo </h1>;

const divRoot = document.querySelector('#App');

ReactDom.render( saludo, divRoot);