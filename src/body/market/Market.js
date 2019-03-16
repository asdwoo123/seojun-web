import React, {Component} from 'react';
import MarketList from "./MarketList";
import SideMenu from "../SideMenu";
import {Route} from "react-router-dom";
import Register from "./Register";
import { connect } from "react-redux";


class Market extends Component {
    render() {
        const { text } = this.props;
        const pathname = this.props.location.pathname.substring(9);
        if (pathname === '') this.props.history.push('/market/BuyAndSell');
        return (
                <SideMenu title="market" items={[['BuyAndSell', text[1]], ['Register', text[2]]]}>
                    <Route path='/market/BuyAndSell' component={MarketList}/>
                    <Route path='/market/Register' component={Register}/>
                </SideMenu>
            )
    }
}

export default connect(
    (state) => ({
        text: state.market.text
    })
)(Market);