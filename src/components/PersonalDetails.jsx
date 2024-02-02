import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const PersonalDetailsForm = ({ formData,setFormData, onPrev, onNext }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    // You can perform any additional logic or validation here
    onNext();
  };

  const onValuesChange = (changedValues, allValues) => {
    // Update the formData state when values change
    console.log('Changed values:', changedValues);
    setFormData((prevData) => ({ ...prevData, ...changedValues }));
  };

  return (
    <Form className='antform'  form={form} onFinish={onFinish} initialValues={formData} onValuesChange={onValuesChange}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please enter your first name!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please enter your last name!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please enter your phone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={onPrev} style={{ marginRight: 8 }}>
          Previous
        </Button>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PersonalDetailsForm;
