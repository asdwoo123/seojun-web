import React, {Component} from 'react';
import logo from './logo.svg';
import { Menu, Select } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CompanyActions from '../redux/company';
import * as ContactActions from '../redux/contact';
import * as MainActions from '../redux/main';
import * as ProductActions from '../redux/product';
import * as PartnerActions from '../redux/partner';
import * as MarketActions from '../redux/market';


const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const Option = Select.Option;

class HeaderComponent extends Component {
    state = {
        current: 'mail'
    };

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    };

    handleOnRoute = (v) => () => {
            this.props.history.push(v);
    };

    handleOnChange = (value) => {
        this.props.companyActions.setText(value);
        this.props.contactActions.setText(value);
        this.props.mainActions.setText(value);
        this.props.productActions.setText(value);
        this.props.partnerActions.setText(value);
        this.props.marketActions.setText(value);
    };

    render() {
        const { company, product, partner, contact, market } = this.props;
        return (
            <div>
                <div style={{ padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img style={{ width: 120, display: "block", cursor: 'pointer' }} onClick={this.handleOnRoute('/')} src={logo} alt=""/>
                    <Select style={{ width: 120 }} defaultValue="en" onChange={this.handleOnChange}>
                        <Option value="en">English</Option>
                        <Option value="ko">한국어</Option>
                    </Select>
                </div>
                <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="dark">
                    <SubMenu title={<span>{ company[0] }</span>} onTitleClick={this.handleOnRoute('/company')}>
                        <MenuItem key="menu1" onClick={this.handleOnRoute('/company/Philosophy')}>{ company[1] }</MenuItem>
                        <MenuItem key="menu2" onClick={this.handleOnRoute('/company/History')}>{ company[2] }</MenuItem>
                        <MenuItem key="menu3" onClick={this.handleOnRoute('/company/Organization')}>{ company[3] }</MenuItem>
                        <MenuItem key="menu4" onClick={this.handleOnRoute('/company/Location')}>{ company[4] }</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span>{ product[0].toUpperCase() }</span>} onTitleClick={this.handleOnRoute('/product')}>
                        <MenuItem key="menu5" onClick={this.handleOnRoute('/product/AssemblyLine')}>{ product[1] }</MenuItem>
                        <MenuItem key="menu6" onClick={this.handleOnRoute('/product/InspectionLine')}>{ product[2] }</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span>{ partner[0].toUpperCase() }</span>} onTitleClick={this.handleOnRoute('/partner')}>
                        <MenuItem key="menu7" onClick={this.handleOnRoute('/partner/Partner')}>{ partner[0] }</MenuItem>
                        <MenuItem key="menu8" onClick={this.handleOnRoute('/partner/SalesRecord')}>{ partner[1] }</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span>{ market[0].toUpperCase() }</span>} onTitleClick={this.handleOnRoute('/market')}>
                        <MenuItem key="menu9" onClick={this.handleOnRoute('/market/BuyAndSell')}>{ market[1] }</MenuItem>
                        <MenuItem key="menu10" onClick={this.handleOnRoute('/partner/Register')}>{ market[2] }</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span>{ contact[0].toUpperCase() }</span>} onTitleClick={this.handleOnRoute('/contact')}>
                        <MenuItem key="menu11" onClick={this.handleOnRoute('/contact/Contact')}>{ contact[0] }</MenuItem>
                        <MenuItem key="menu12" onClick={this.handleOnRoute('/contact/Inquiry')}>{ contact[1] }</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        company: state.company.text,
        product: state.product.text,
        partner: state.partner.text,
        contact: state.contact.text,
        market: state.market.text
    }),
    (dispatch) => ({
        companyActions: bindActionCreators(CompanyActions, dispatch),
        contactActions: bindActionCreators(ContactActions, dispatch),
        mainActions: bindActionCreators(MainActions, dispatch),
        productActions: bindActionCreators(ProductActions, dispatch),
        partnerActions: bindActionCreators(PartnerActions, dispatch),
        marketActions: bindActionCreators(MarketActions, dispatch)
    })
)(withRouter(HeaderComponent));