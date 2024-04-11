import styles from './verify-email.module.css';
import { Button, Card, Form, Input, type FormProps } from 'antd';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface VerifyEmailProps {}

type FieldType = {
  email?: string;
};

export function VerifyEmail(props: VerifyEmailProps) {
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
      <Card
        title=""
        bordered={false}
        style={{ width: 600 }}
        className={styles.form}
      >
        <h1>Please check your E-mail</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              paddingTop: '2rem',
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                navigate('/login');
              }}
            >
              Go To Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default VerifyEmail;
