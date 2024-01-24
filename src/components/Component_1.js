import React from 'react'

const Component_1 = () => {
  return (
    <React.Fragment>
    <Title></Title>
    <Students></Students>
    </React.Fragment>
    )
  }

  export default Component_1;

  const Title = ()=>{
    return(
      <h1>React Class</h1>
      )
    }

    const Students = ()=>{
      return(
        <ul class="students_list">
        <li>Miles Davis</li>
        <li>Kevin Shields</li>
        <li>Klaus Schulze</li>
        </ul>
        )
      }