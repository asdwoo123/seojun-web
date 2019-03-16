import React from 'react';
import Content from "../Content";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';


const Location = (props) => {
    const routes = [
        {
            path: 'index',
            breadcrumbName: props.home[0]
        },
        {
            path: 'company',
            breadcrumbName: props.text[0]
        },
        {
            path: 'Location',
            breadcrumbName: props.text[4]
        }
    ];
    return (
        <Content title={props.text[4]} routes={routes}>
            <Map
                style={{ width: 730, height: 418 }}
                google={props.google} zoom={14} initialCenter={{
                lat: 37.616614,
                lng: 126.62128
            }}
            >
                <Marker name='Current location'/>
            </Map>
            <p style={{ top: 428, position: "relative" }}>
               {' Add. ' + props.text[26] }
               <br />
                Tel. +82 (031) 986-1497<br />
                Fax. 031-999-4850
            </p>
        </Content>
    )
};

export default connect(
    (state) => ({
        text: state.company.text,
        home: state.main.text
    })
)(GoogleApiWrapper({
    apiKey: 'AIzaSyA0bIvbpw18whPv4eqkoZwBa02ANKWOzaY'
})(Location));