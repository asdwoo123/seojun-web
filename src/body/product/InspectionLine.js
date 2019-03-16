import React, {Component} from 'react';
import Content from "../Content";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";


class InspectionLine extends Component {
    render() {
        const { text } = this.props;
        const routes = [
            {
                path: 'index',
                breadcrumbName: this.props.home[0]
            },
            {
                path: 'product',
                breadcrumbName: text[0]
            },
            {
                path: 'InspectionLine',
                breadcrumbName: text[2]
            }
        ];
        const data = [
            {
                title: 'Leak & Durability M/C',
                img: '/Leak & Durability MC.jpg',
                content: 'Temperature & Humidity Chamber /\n' +
                    'Shaker equipment /\n' +
                    'PLC controller (PC)'
            },
            {
                title: 'Valve core air leak M/C',
                img: '/Valve core air leak MC.jpg',
                content: ''
            },
            {
                title: '10-Shots Leak Test Machine',
                img: '/10-Shots Leak Test Machine.jpg',
                content: ''
            },
            {
                title: 'YG Inspection machine',
                img: '/YG Inspection machine.jpg',
                content: ''
            },
            {
                title: 'OIL PAN LEAK TEST MACHINE',
                img: '/OIL PAN LEAK TEST MACHINE.jpg',
                content: ''
            },
            {
                title: 'Vacuum leak test MC',
                img: '/Vacuum leak test MC.jpg',
                content: ''
            }
        ];
        return (
            <Content title={text[2]} routes={routes}>
                <ProductItem data={data}/>
            </Content>
        )
    }
}

export default connect(
    (state) => ({
        text: state.product.text,
        home: state.main.text
    })
)(InspectionLine);