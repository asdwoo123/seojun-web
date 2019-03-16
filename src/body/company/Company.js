import React from 'react';
import SideMenu from "../SideMenu";
import Philosoph from "./Philosoph";
import { Route } from 'react-router-dom';
import Organization from "./Organization";
import History from './History';
import Location from './Location';
import { connect } from 'react-redux';


const Company = (props) => {
    const { text } = props;
    const pathname = props.location.pathname.substring(9);
    if (pathname === '') props.history.push('/company/Philosophy');
    return (
        <SideMenu title="company" items={[['Philosophy', text[1]], ['History', text[2]], ['Organization', text[3]], ['Location', text[4]]]}>
            <Route path='/company/Philosophy' component={Philosoph}/>
            <Route path='/company/History' component={History}/>
            <Route path='/company/Organization' component={Organization}/>
            <Route path='/company/Location' component={Location}/>
        </SideMenu>
    )
};

export default connect(
    (state) => ({
        text: state.company.text
    })
)(Company);