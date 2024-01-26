import React from 'react';

const Compontent_props = (props) => {

  /* console.log(props); */

  {/* Props Object Deconstruction  (see point 33 inreact_guide files) */}
  const {salute, student, children} = props;

  return (
    <React.Fragment>

    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-6'>
          <article className="text-start my-3">

              {/*       See poin 32 inreact_guide files

              <h2>{props.salute}</h2>
              <h5>{props.student}</h5> */}

              {/* See point 33 in react_guide files */}

              <h2 className='d-inline'>{salute}</h2>
              <h4 className='d-inline'>{student}</h4>
              <h6 className='fst-italic '>{children}</h6>

        </article>
      </div>
    </div>
  </div>

  </React.Fragment>
  )
}

export default Compontent_props;
