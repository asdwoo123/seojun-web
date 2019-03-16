import React from 'react';
import Content from "../Content";
import Ptable from "./Ptable";


const SalesRecord = (props) => {
    const pathname = props.location.pathname.substring(9);
    if (pathname === '') props.history.push('/partner/Partner');
    const routes = [
        {
            path: 'index',
            breadcrumbName: 'HOME'
        },
        {
            path: 'partner',
            breadcrumbName: 'PARTNER'
        },
        {
            path: 'SalesRecord',
            breadcrumbName: 'SalesRecord'
        }
    ];
    const colums = [
        {
            title: 'Partner',
            dataIndex: 'partner',
            render: (text, row, index) => {
                return <span>{text}</span>
            }
        },
        {
            title: 'Equipment',
            dataIndex: 'equipment',
            render: (text, row, index) => {
                return <span>{text}</span>
            }
        }
    ];
    const data = [
        {
            key: '1',
            partner: 'MANN + HUMMEL THAILAND',
            equipment: 'FORD 1348 additional Air Cleaner Assembly Line'
        },
        {
            key: '2',
            partner: 'MANN + HUMMEL THAILAND',
            equipment: 'Leak & Durability M/C'
        },
        {
            key: '3',
            partner: 'MANN + HUMMEL TURKEY',
            equipment: 'GB1183'
        }
    ];
    return (
        <Content title="Sales Record" routes={routes}>
            <h4>2014 financial year</h4>
            <Ptable columns={colums} data={data}/>
        </Content>
    )
};

export default SalesRecord;