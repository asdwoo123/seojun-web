import React, {Component} from 'react';
import Content from "../Content";
import ProductItem from "./ProductItem";
import { connect } from 'react-redux';


class AssemblyLine extends Component {
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
                path: 'AssemblyLine',
                breadcrumbName: text[1]
            }
        ];
        const data = [
            {
                title: 'MAB',
                img: '/MAB.jpg',
                content: ''
            },
            {
                title: 'GB',
                img: '/GB.jpg',
                content: 'Cover Assembly \n' +
                    'Body Assembly \n' +
                    'Body + DSD Assembly /\n' +
                    'Duct-A Assembly /\n' +
                    'Duct-B Assembly /\n' +
                    'Final Assembly'
            },
            {
                title: 'NIS 1250',
                img: '/NIS 1250.jpg',
                content: 'Hot insert & Cover Assembly /\n' +
                    'Housing Assembly /\n' +
                    'Duct Assembly /\n' +
                    'Final Assembly'
            },
            {
                title: 'IQORON',
                img: '/IQORON.jpg',
                content: '1-point Hot insert Assembly /\n' +
                    '3-point Hot insert Assembly /\n' +
                    '3-point Cold insert Assembly /\n' +
                    'Final Assembly'
            },
            {
                title: 'IA',
                img: '/IA.jpg',
                content: 'Duct Assembly /\n' +
                    'Clip/MTG rubber Assembly /\n' +
                    'Final Assembly'
            },
            {
                title: 'Ford 1317',
                img: '/Ford 1317.jpg',
                content: 'Upper/Lower duct Assembly /\n' +
                    'PCM cover Assembly'
            },
            {
                title: 'Ultrasonic Welding Machine',
                img: '/Ultrasonic Welding Machine.jpg',
                content: ''
            },
            {
                title: 'YG Heat Welding Machine',
                img: '/YG Heat Welding Machine.jpg',
                content: ''
            },
            {
                title: 'OIL PAN LEAK TESTER',
                img: '/OIL PAN LEAK TESTER.jpg',
                content: ''
            },
            {
                title: 'FORD 1348',
                img: '/FORD 1348.jpg',
                content: ''
            },
            {
                title: 'FORD 1343',
                img: '/FORD 1343.jpg',
                content: ''
            },
        ];
        return (
            <Content title={text[1]} routes={routes}>
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
)(AssemblyLine);