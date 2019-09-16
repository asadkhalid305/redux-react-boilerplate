import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import {
    Form,
    Input,
    Button,
    Row,
    Col,
} from 'antd';

import { newPost } from '../../actions/postActions'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const post = {
                    title: values.title,
                    body: values.body
                }

                this.props.newPost(post)
            }
        });
    };

    onChange = (e, name) => {
        this.setState({
            [name]: e.target.value
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h1>Add Post</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="Title">
                                {getFieldDecorator('title', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your title!',
                                        },
                                    ],
                                    initialValue: this.state.title,
                                    onChange: (e) => this.onChange(e, 'title')
                                })(<Input placeholder="Enter title..." />)}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Body">
                                {getFieldDecorator('body', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your body!',
                                        },
                                    ],
                                    initialValue: this.state.body,
                                    onChange: (e) => this.onChange(e, 'body')
                                })(<Input placeholder="Enter body..." />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(PostForm);

PostForm.propTypes = {
    newPost: PropTypes.func.isRequired,
}

export default connect(null, { newPost })(WrappedRegistrationForm)
