import React from 'react';

const Compontent_props = (props) => {

  /* console.log(props); */

  {/* Props Object Deconstruction  (see point 33 inreact_guide files) */}
  const {salute, student, children} = props;

  return (
    <React.Fragment>
    <article className="my-5">

    {/*       See point 32 in react_guide files

    <h2>{props.salute}</h2>
  <h5>{props.student}</h5> */}

  {/* See  point 33 in react_guide files*/}

  <h2>{salute}</h2>
  <h5>{student}</h5>
  <h6>{children}</h6>

  </article>
  </React.Fragment>
  )
}

export default Compontent_props;
