import React, {Component} from 'react';
import Content from "../Content";
import {
    Form, Button, Upload, Icon, Checkbox, Input
} from 'antd';
import { connect } from "react-redux";

const FormItem = Form.Item;


class Inquiry extends Component {
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
                path: 'contact',
                breadcrumbName: text[0]
            },
            {
                path: 'Inquiry',
                breadcrumbName: text[1]
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
            <Content title={text[1]} routes={routes}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <FormItem label={(
                        <span>{text[10]}</span>
                    )}>
                        {getFieldDecorator('writer', {
                            rules: [{ required: true, message: 'Please input your name', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label={(
                        <span>{text[11]}</span>
                    )}>
                        {getFieldDecorator('subject', {
                            rules: [{ required: true, message: 'Please input subject', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <Form.Item
                        label={text[12]}
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <FormItem label={(
                        <span>{text[13]}</span>
                    )}>
                        {getFieldDecorator('content', {
                            rules: [{ required: true, message: 'Please input content', whitespace: true }],
                        })(
                            <Input.TextArea rows={5} />
                        )}
                    </FormItem>
                    <Form.Item
                        label={text[14]}
                    >
                            <Upload name="img" action="/upload.do" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Click to upload
                                </Button>
                            </Upload>
                    </Form.Item>
                    <FormItem label={(
                        <span>{text[15]}</span>
                    )}>
                            <Input.TextArea rows={5} value={text[16]} disabled />
                    </FormItem>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>{text[17]}</Checkbox>
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">{text[18]}</Button>
                    </Form.Item>
                </Form>
            </Content>
        )
    }
}

export default connect(
    (state) => ({
        text: state.contact.text,
        home: state.main.text
    })
)(Form.create({ name: 'validate_other' })(Inquiry));