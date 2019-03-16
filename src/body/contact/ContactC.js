import React from 'react';
import Content from "../Content";
import { connect } from 'react-redux';


const ContactC = (props) => {
    const { text } = props;
    const routes = [
        {
            path: 'index',
            breadcrumbName: props.home[0]
        },
        {
            path: 'contact',
            breadcrumbName: text[0].toLowerCase()
        },
        {
            path: 'Contact',
            breadcrumbName: text[0]
        }
    ];
    return (
        <Content title={text[0]} routes={routes}>
            <div style={{ width: 730 }}>
                <p>{text[2]}</p>
                <p>{text[3]}</p>
                <p>{text[4]}</p>
                <p>{text[5]}</p>
                <p>{text[6]}</p>
                <p>{text[7]}</p>
                <p>{text[8]}</p>
                <p>+81 31 986 1497 / 031 999 4850</p>
                <p>{text[9]}</p>
                <p>12.01.1995</p>
            </div>
        </Content>
    )
};

export default connect(
    (state) => ({
        text: state.contact.text,
        home: state.main.text
    })
)(ContactC);