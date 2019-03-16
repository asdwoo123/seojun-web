import React, {Component} from 'react';
import {Menu} from "antd";
import './Content.css';
import { withRouter } from 'react-router-dom';


const MenuItem = Menu.Item;


class SideMenu extends Component {
    render() {
        return (
            <div style={{ height: '100%', position: 'relative' }}>
                <Menu style={{ width: 256, height: '100%', display: "inline-block" }} mode="vertical">
                    {
                        this.props.items.map((v, k) => (
                            <MenuItem key={k} onClick={() => { this.props.history.push(`/${this.props.title}/${v[0]}`) }}>{ v[1] }</MenuItem>
                        ))
                    }
                </Menu>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(SideMenu);