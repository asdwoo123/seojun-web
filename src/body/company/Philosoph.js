import React from 'react';
import Content from "../Content";
import { connect } from 'react-redux';


const Philosoph = (props) => {
    const { text } = props;
    const routes = [
        {
            path: 'index',
            breadcrumbName: props.home[0]
        },
        {
            path: 'company',
            breadcrumbName: text[0]
        },
        {
            path: 'Philosophy',
            breadcrumbName: text[1]
        }
    ];
    return (
        <Content title={text[1]} routes={routes}>
            <div style={{ width: '730' }}>
                <h2>{text[5]}</h2>
                <p>{text[6]}</p>
                <p>{text[7]}</p>
                <p>{text[8]}</p>
                <p>{text[9]}</p>
                <p>{text[10]}</p>
                <p>{text[11]}</p>
                <h3>{text[12]}</h3>
            </div>
        </Content>
    )
};

export default connect(
    (state) => ({
        text: state.company.text,
        home: state.main.text
    })
)(Philosoph);