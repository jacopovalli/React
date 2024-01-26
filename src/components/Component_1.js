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
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
              <h1 className='pt-5 pb-4 text-start'>React Class</h1>
          </div>
        </div>
      </div>
      )
    }

    const Students = ()=>{
      return(
        <div className='container-fluid'>
                <div className='row justify-content-center'>
                        <div className='col-12 col-md-6'>
                                <ul className="list_items text-start py-3">
                                      <li>[Miles Davis</li>
                                      <li>Klaus Schulze</li>
                                      <li>Kevin Shields]</li>
                                </ul>
                          </div>
                  </div>
        </div>
        )
      }