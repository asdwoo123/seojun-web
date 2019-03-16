import React, {Component} from 'react';
import Content from "../Content";
import { Form, Button, Upload, Icon, Checkbox, Input } from 'antd';
import { connect } from "react-redux";


const FormItem = Form.Item;


class Register extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { text } = this.props;
        const routes = [
            {
                path: 'index',
                breadcrumbName: this.props.home[0]
            },
            {
                path: 'MARKET',
                breadcrumbName: text[0]
            },
            {
                path: 'Register',
                breadcrumbName: text[2]
            }
        ];
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <Content title="Register" routes={routes}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <FormItem label={(
                        <span>{ text[7] }</span>
                    )}>
                        {getFieldDecorator('writer', {
                            rules: [{ required: true, message: 'Please input your name', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label={(
                        <span>{ text[8] }</span>
                    )}>
                        {getFieldDecorator('subject', {
                            rules: [{ required: true, message: 'Please input subject', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label={(
                        <span>{ text[9] }</span>
                    )}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input password', whitespace: true }],
                        })(
                            <Input.Password />
                        )}
                    </FormItem>
                    <FormItem label={(
                        <span>{ text[10] }</span>
                    )}>
                        {getFieldDecorator('content', {
                            rules: [{ required: true, message: 'Please input content', whitespace: true }],
                        })(
                            <Input.TextArea rows={5} />
                        )}
                    </FormItem>
                    <Form.Item
                        label={ text[11] }
                    >
                        <Upload name="img" action="/upload.do" listType="picture">
                            <Button>
                                <Icon type="upload" /> Click to upload
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">{ text[12] }</Button>
                    </Form.Item>
                </Form>
            </Content>
        )
    }
}

export default connect(
    (state) => ({
        text: state.market.text,
        home: state.main.text
    })
)(Form.create({ name: 'validate_other' })(Register));