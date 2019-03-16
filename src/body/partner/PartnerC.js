import React from 'react';
import Content from "../Content";
import Ptable from "./Ptable";
import { connect } from "react-redux";


const PartnerC = (props) => {
    const { text } = props;
    const routes = [
        {
            path: 'index',
            breadcrumbName: props.home[0]
        },
        {
            path: 'partner',
            breadcrumbName: text[0].toLowerCase()
        },
        {
            path: 'Partner',
            breadcrumbName: text[1]
        }
    ];
    const colums = [
        {
            title: text[0],
            dataIndex: 'partner',
            render: (text, row, index) => {
                return <span>{text}</span>
            }
        },
        {
            title: text[2],
            dataIndex: 'industry',
            render: (text, row, index) => {
                return <span>{text}</span>
            }
        }
    ];
    const data = [
        {
            key: '1',
            partner: 'LUBO INT\'L CO.,LTD',
            industry: text[3]
        },
        {
            key: '2',
            partner: 'MANN + HUMMEL',
            industry: text[4]
        },
        {
            key: '3',
            partner: 'YOUNGBO INT\'L CO.,LTD',
            industry: text[5]
        },
        {
            key: '4',
            partner: 'SAMJUNG INT\'L CO.,LTD',
            industry: text[6]
        },
        {
            key: '5',
            partner: 'KOREA FT INT\'L CO.,LTD',
            industry: text[7]
        },
    ];
    return (
        <Content title="Partner" routes={routes}>
            <Ptable columns={colums} data={data}/>
        </Content>
    )
};

export default connect(
    (state) => ({
        text: state.partner.text,
        home: state.main.text
    })
)(PartnerC);