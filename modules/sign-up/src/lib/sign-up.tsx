import styles from './sign-up.module.css';
import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Card,
  DatePicker,
  InputNumber,
  Switch,
  Cascader,
  TreeSelect,
  Select,
  Radio,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SignUpProps {}

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

type SizeType = Parameters<typeof Form>[0]['size'];

export function SignUp(props: SignUpProps) {
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
      <h1 className={styles.welcome}>Create your account</h1>
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
          <Form.Item label="Client Type" name="size">
            <Radio.Group>
              <Radio.Button value="small">Hospital</Radio.Button>
              <Radio.Button value="default">Doctor</Radio.Button>
              <Radio.Button value="large">Patient</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Full Name">
            <Input />
          </Form.Item>
          <Form.Item label="Username">
            <Input />
          </Form.Item>
          <Form.Item label="E-mail" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Location">
            <Cascader
              options={[
                {
                  value: 'Kiambu',
                  label: 'Kiambu',
                  children: [
                    { value: 'Ruiru', label: 'Ruiru' },
                    { value: 'Juja', label: 'Juja' },
                    { value: 'Limuru', label: 'Limuru' },
                    { value: 'Kiambu Town', label: 'Kiambu Town' },
                    { value: 'Thika', label: 'Thika' },
                  ],
                },
                {
                  value: 'Nairobi',
                  label: 'Nairobi',
                  children: [
                    { value: 'Ruaraka', label: 'Ruaraka' },
                    { value: 'Roysambu', label: 'Roysambu' },
                    { value: 'Kasarani', label: 'Kasarani' },
                    { value: 'Langata', label: 'Langata' },
                    { value: 'Dagoretti', label: 'Dagoretti' },
                    { value: 'Embakasi', label: 'Embakasi' },
                    { value: 'Makadara', label: 'Makadara' },
                    { value: 'Kamukunji', label: 'Kamukunji' },
                  ],
                },
                {
                  value: 'Kisumu',
                  label: 'Kisumu',
                  children: [
                    { value: 'Muhoroni', label: 'Muhoroni' },
                    { value: 'Kisumu East', label: 'Kisumu East' },
                    { value: 'Seme', label: 'Seme' },
                    { value: 'Nyando', label: 'Nyando' },
                    { value: 'Nyakach', label: 'Nyakach' },
                    { value: 'Kisumu Central', label: 'Kisumu Central' },
                  ],
                },
                {
                  value: 'Mombasa',
                  label: 'Mombasa',
                  children: [
                    { value: 'Mvita', label: 'Mvita' },
                    { value: 'Kisauni', label: 'Kisauni' },
                    { value: 'Jomvu', label: 'Jomvu' },
                    { value: 'Changamwe', label: 'Changamwe' },
                    { value: 'Likoni', label: 'Likoni' },
                    { value: 'Nyali', label: 'Nyali' },
                  ],
                },
              ]}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={()=>navigate('/verify_email')}>
              Submit
            </Button>
            <span className={styles.register_question}>
              Already have an account?{' '}
              <Link to="/login">Login</Link>
            </span>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
