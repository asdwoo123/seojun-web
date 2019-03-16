import React from 'react';
import Content from "../Content";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { connect } from 'react-redux';


const History = (props) => {
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
            path: 'History',
            breadcrumbName: text[2]
        }
    ];
    return (
        <Content title={text[2]} routes={routes}>
            <div style={{ width: 730 }}>
                <Timeline lineColor={'#ddd'}>
                    <TimelineItem
                    key="001" dateText="1995"
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '15px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                    dateInnerStyle={{ background: '#61b8ff' }}
                    style={{ color: '#5674aa' }}>
                        <p>{text[13]}</p>
                    </TimelineItem>
                    <TimelineItem
                        key="002" dateText="2002"
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                        dateInnerStyle={{ background: '#76bb7f' }}
                        style={{ color: '#7990bc' }}>

                        <p>{text[14]}</p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="2013"
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                        dateInnerStyle={{ background: '#FFBF00' }}
                        style={{ color: '#99accc' }}>
                        <p>{text[15]}</p>
                    </TimelineItem>
                    <TimelineItem
                        key="004"
                        dateText="Today"
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                        dateInnerStyle={{ background: '#F781F3' }}
                        style={{ color: '#bbc7dd' }}>
                        <p>{text[16]}</p>
                    </TimelineItem>
                </Timeline>
            </div>
        </Content>
    )
};

export default connect(
    (state) => ({
        text: state.company.text,
        home: state.main.text
    })
)(History);