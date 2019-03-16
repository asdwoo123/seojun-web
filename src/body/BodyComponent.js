import React from 'react';
import Company from "./company/Company";
import { Route } from 'react-router-dom';
import Product from "./product/Product";
import Partner from "./partner/Partner";
import Contact from "./contact/Contact";
import Main from "./main/Main";
import Market from "./market/Market";


const BodyComponent = (props) => {
    return (
        <div style={{ height: '100%', backgroundColor: '#f7f7f7' }}>
            <Route exact path='/' component={Main}/>
            <Route path='/company' component={Company}/>
            <Route path='/product' component={Product}/>
            <Route path='/partner' component={Partner}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/market' component={Market}/>
        </div>
    )
};

export default BodyComponent;