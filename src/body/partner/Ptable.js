import React from 'react';
import { Table } from 'antd';


const Ptable = (props) => {
    return (
        <Table columns={props.columns} dataSource={props.data} bordered/>
    )
};

export default Ptable;