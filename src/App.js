import React from 'react';
import './App.css';
import Component_1 from './components/Component_1';
import Products from './components/Products';
import Component_props from './components/Component_props';

//Objects that provide the actual parameter to the props [see point 31 in react_guide files]
const hello_1 = {
  salute: 'Good Morning, ',
  student: 'Miles'
};

const hello_2 = {
  salute: 'Guten Tag, ',
  student: 'Klaus'
};

const hello_3 = {
  salute: 'Goog Morning ',
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
        (shoegaze pioneer)
      </React.Fragment>
    </Component_props>

    </React.Fragment>
    );
  }

  export default App;