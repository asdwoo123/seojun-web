import React from 'react';
import Content from "../Content";
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
import { connect } from 'react-redux';


const MyNodeComponent = ({node}) => {
    return (
        <div className="initechNode">{ node.name }</div>
    );
};


const Organization = (props) => {
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
            path: 'Organization',
            breadcrumbName: text[3]
        }
    ];
    const initechOrg = {
        name: text[17],
        children: [
            {
                name: text[18],
                children: [{
                    name: text[23],
                    children: [{
                        name: text[24],
                        children: [{
                            name: text[25]
                        }]
                    }]
                }]
            },
            {
                name: text[19],
                children: [{
                    name: text[23],
                    children: [{
                        name: text[24],
                        children: [{
                            name: text[25]
                        }]
                    }]
                }]
            },
            {
                name: text[20],
                children: [{
                    name: text[21],
                    children: [{
                        name: text[22]
                    }]
                }]
            }
        ]
    };
    return (
        <Content title={text[3]} routes={routes}>
            <div style={{ width: 730 }}>
                <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
            </div>
        </Content>
    )
};

export default connect(
    (state) => ({
        text: state.company.text,
        home: state.main.text
    })
)(Organization);