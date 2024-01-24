import React from 'react';

// Regarding the declaration of variables and constants and the retrieval of their values in the component's body, please refer to points 24 and 25 in the file react.md.
const card_img = 'https://picsum.photos/200';
const card_title = 'titolo card';
const card_body = 'sono una card creata dinamicamente attraverso un component in React'
const card_button_text = 'clicca !'


const Products = () => {
    return (
        <React.Fragment>

        <div className="container-fluid">
                <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                                <div className="card my-5" style={{ width: '18rem' }}>
                                    <img src={`${card_img}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title text-center">{`${card_title}`}</h5>
                                    <p className="card-text text-center">{`${card_body}`}</p>
                                    <div className="container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="col-6 d-flex flex-column align-items-center">
                                                <a href="#" className="btn btn-danger"> {`${card_button_text}`}</a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                 </div>
                        </div>
                </div>
        </div>

        </React.Fragment>
        );
    };

    export default Products;