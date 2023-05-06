import { Button, Form, Input, message, Modal } from 'antd'
import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { register } from '../utils'

function Register() {
    const [displayModal, setDisplayModal] = useState(false)

    const handleCancel = () => {
        setDisplayModal(false)
    }

    const signupOnclick = () => {
        setDisplayModal(true)
    }

    const onFinish = (data) => {
        register(data)
            .then(() => {
                setDisplayModal(false)
                message.success('Successfully signed up')
            }).catch((err) => {
                message.error(err.message)
            })
    }

    return (
        <>
            <Button shape='round' type='primary' onClick={signupOnclick}>
                Register
            </Button>
            <Modal
                title='Register'
                visible={displayModal}
                onCancel={handleCancel}
                footer={null}
                destoryOnClose={true}
            >
                <Form
                    name='normal_register'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    preserve={false}
                >
                    <Form.Item
                        name='user_id'
                        rules={[{ require: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Username' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ require: true, message: 'Please input your Password!' }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder='Password' />
                    </Form.Item>
                    <Form.Item
                        name='first_name'
                        rules={[{ require: true, message: 'Please input your Firstname!' }]}
                    >
                        <Input placeholder='firstname' />
                    </Form.Item>
                    <Form.Item
                        name='last_name'
                        rules={[{ require: true, message: 'Please input your Lastname!' }]}
                    >
                        <Input placeholder='lsstname' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Register