import React from 'react';
import {Route} from "react-router-dom";
import SideMenu from "../SideMenu";
import PartnerC from "./PartnerC";
import SalesRecord from "./SalesRecord";
import { connect } from "react-redux";


const Partner = (props) => {
    const { text } = props;
    const pathname = props.location.pathname.substring(9);
    if (pathname === '') props.history.push('/partner/Partner');
    return (
        <SideMenu title="partner" items={[['Partner', text[0]], ['SalesRecord', text[1]]]}>
            <Route path='/partner/Partner' component={PartnerC}/>
            <Route path='/partner/SalesRecord' component={SalesRecord}/>
        </SideMenu>
    )
};

export default connect(
    (state) => ({
        text: state.partner.text,
        home: state.main.text
    })
)(Partner);