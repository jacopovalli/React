import React from 'react';
import './App.css';
import Component_1 from './components/Component_1';
import Products from './components/Products';
import Component_props from './components/Compontent_props';
import Salute_fetch from './components/Salute_fetch';

//Objects that provide the actual parameter to the props [see point 31 in react_guide files]
const hello_1 = {
  salute: 'Ciao, ',
  student: 'Jacopo'
};

const hello_2 = {
  salute: 'Hello, ',
  student: 'Raffaele'
};

const hello_3 = {
  salute: 'Bonjour, ',
  student: 'Luca'
};

function App() {
  return (
    <React.Fragment>

    <Component_1></Component_1>

    <Products></Products>

{/*     See point 32 in react_guide files

    <Component_props salute={hello_1.salute} student={hello_1.student}></Component_props>
    <Component_props salute={hello_2.salute} student={hello_2.student}></Component_props>
    <Component_props salute={hello_3.salute} student={hello_3.student}></Component_props>  */}

{/*      See point 33 in react_guide files */}

    <Component_props {...hello_1}></Component_props>
    <Component_props {...hello_2}></Component_props>

    {/* Vedi punto 36 del file react.md */}
    <Component_props {...hello_3}>
      <React.Fragment>
        Aula::12 founder
      </React.Fragment>
    </Component_props>

    <Salute_fetch></Salute_fetch>

    </React.Fragment>
    );
  }

  export default App;