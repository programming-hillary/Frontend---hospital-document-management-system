import { Button, Card, Form, Input, type FormProps } from 'antd';
import styles from './forgot-password.module.css';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ForgotPasswordProps {}

type FieldType = {
  email?: string;
};

export function ForgotPassword(props: ForgotPasswordProps) {
  const navigate = useNavigate()
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
      <h1>Enter Your Email Here:</h1>

      <Card title="" bordered={false} style={{ width: 600 }}>
        <Form
          name="basic"
          style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.form}
        >
          <Form.Item<FieldType>
            name="email"
            style={{ maxWidth: 600 }}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={() => {navigate('/verify_email')}} style={{float: "right"}}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default ForgotPassword;
