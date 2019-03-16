import React, {Component} from 'react';
import {PageHeader} from "antd";


class Content extends Component {
    render() {
        return (
            <PageHeader title={this.props.title} breadcrumb={{ routes: this.props.routes }}
                        style={{ display: "inline-block", width: 'calc(100% - 256px)', top: 0, left: 256, position: "absolute",
                            backgroundColor: '#f7f7f7'}} >
                {this.props.children}
            </PageHeader>
        )
    }
}

export default Content;