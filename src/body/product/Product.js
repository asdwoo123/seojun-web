import React from 'react';
import SideMenu from "../SideMenu";
import {Route} from "react-router-dom";
import AssemblyLine from "./AssemblyLine";
import InspectionLine from "./InspectionLine";
import { connect } from 'react-redux';


const Product = (props) => {
    const { text } = props;
    const pathname = props.location.pathname.substring(9);
    if (pathname === '') props.history.push('/product/AssemblyLine');
    return (
        <SideMenu title="product" items={[['AssemblyLine', text[1]], ['InspectionLine', text[2]]]}>
            <Route path='/product/AssemblyLine' component={AssemblyLine}/>
            <Route path='/product/InspectionLine' component={InspectionLine}/>
        </SideMenu>
    )
};

export default connect(
    (state) => ({
        text: state.product.text
    })
)(Product);