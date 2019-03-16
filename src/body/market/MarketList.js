import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import Content from "../Content";
import { connect } from "react-redux";


const data = [
    {
        key: 1,
        no: 1,
        name: 'Hyebin',
        subject: 'MAB 한대 팝니다!',
        day: new Date().toLocaleDateString()
    },
    {
        key: 2,
        no: 2,
        name: 'Yeonwoo',
        subject: 'MAB 두대 팝니다!',
        day: new Date().toLocaleDateString()
    },
    {
        key: 3,
        no: 3,
        name: 'Jane',
        subject: 'MAB 세대 팝니다!',
        day: new Date().toLocaleDateString()
    },
    {
        key: 4,
        no: 4,
        name: 'Taeha',
        subject: 'MAB 네대 팝니다!',
        day: new Date().toLocaleDateString()
    },
    {
        key: 5,
        no: 5,
        name: 'Nayun',
        subject: 'MAB 다섯대 팝니다!',
        day: new Date().toLocaleDateString()
    }
];


class MarketList extends Component {
    state = {
        searchText: '',
        sortedNO: null
    };

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
                             setSelectedKeys, selectedKeys, confirm, clearFilters,
                         }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => { this.searchInput = node; }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    Reset
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const { text } = this.props;
        const columns = [
            {
                title: text[3],
                dataIndex: 'no',
                key: 'no',
                width: '10%'
            },
            {
            title: text[4],
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            ...this.getColumnSearchProps('name'),
        }, {
            title: text[5],
            dataIndex: 'subject',
            key: 'subject',
            width: '30%',
            ...this.getColumnSearchProps('subject'),
        }, {
            title: text[6],
            dataIndex: 'day',
            key: 'day',
            width: '20%',
            ...this.getColumnSearchProps('day'),
        }];
        const routes = [
            {
                path: 'index',
                breadcrumbName: this.props.home[0]
            },
            {
                path: 'market',
                breadcrumbName: text[0]
            },
            {
                path: 'BuyAndSell',
                breadcrumbName: text[1]
            }
        ];
        return (
            <Content title={text[1]} routes={routes}>
                <Table columns={columns} dataSource={data} />
            </Content>
        )
    }
}

export default connect(
    (state) => ({
        text: state.market.text,
        home: state.main.text
    })
)(MarketList);