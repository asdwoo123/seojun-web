import React from 'react';
import {Route} from "react-router-dom";
import SideMenu from "../SideMenu";
import ContactC from "./ContactC";
import Inquiry from "./Inquiry";
import { connect } from "react-redux";


const Contact = (props) => {
    const { text } = props;
    const pathname = props.location.pathname.substring(9);
    if (pathname === '') props.history.push('/contact/Contact');
    return (
        <SideMenu title="contact" items={[['Contact', text[0]], ['Inquiry', text[1]]]}>
            <Route path='/contact/Contact' component={ContactC}/>
            <Route path='/contact/Inquiry' component={Inquiry}/>
        </SideMenu>
    )
};

export default connect(
    (state) => ({
        text: state.contact.text
    })
)(Contact);