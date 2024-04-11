import React from 'react';
import styles from './login.module.css';
import { Button, Checkbox, Form, type FormProps, Input, Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LoginProps {}

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export function Login(props: LoginProps) {
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.welcome}>Sign into HOSDOCS!</h1>
      <Card title="" bordered={false} style={{ width: 600 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.form}
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => navigate('/dashboard')}
              style={{float: "right"}}
            >
              Submit
            </Button>
          </Form.Item>
          <div className={styles.bottom_opts}>
            <span className={styles.register_question}>
            Are you a new member? <Link to="/register">Create an account</Link>
          </span>
          <span className={styles.register_question}>
            <Link to="/forgot_password">Forgot password</Link>
          </span>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
