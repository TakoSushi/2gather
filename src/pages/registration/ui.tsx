import {
  Button,
  Checkbox,
  Flex,
  Form,
  type FormProps,
  Input,
  Space,
  Typography,
} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../shared/const/path';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = values => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo);
};

export const Registration: React.FC = () => (
  <Flex
    style={{ width: '100%', margin: '100px auto', maxWidth: 1280 }}
    vertical
    align="center"
    justify="center"
    gap="large"
  >
    <Typography.Title level={1}>Зарегистрироваться</Typography.Title>
    <Form
      name="sign-up"
      variant="filled"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
    <Typography.Text>
      <Space direction="horizontal" size="small" style={{ display: 'flex' }}>
        Вы уже зарегистрированный?
        <Link to={paths.auth.signIn}>Войдите</Link>
      </Space>
    </Typography.Text>
  </Flex>
);
