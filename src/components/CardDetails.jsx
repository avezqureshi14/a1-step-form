// PaymentDetailsForm.js
import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const PaymentDetailsForm = ({formData, setFormData, onPrev, onNext }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Payment Form values:', values);
    // You can perform any additional logic or validation here
    onNext();
  };

  const onValuesChange = (changedValues, allValues) => {
    // Update the formData state when values change
    setFormData((prevData) => ({ ...prevData, ...changedValues }));
  };

  return (
    <Form className='antform' form={form} onFinish={onFinish} initialValues={formData} onValuesChange={onValuesChange}>
      <Form.Item
        label="Name on Card"
        name="nameOnCard"
        rules={[{ required: true, message: 'Please enter the name on your card!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Credit Card Number"
        name="creditCardNumber"
        rules={[{ required: true, message: 'Please enter your credit card number!' }]}
      >
        <Input />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Expiry Month" name="expiryMonth" rules={[{ required: true, message: 'Please enter the expiry month!' }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Expiry Year" name="expiryYear" rules={[{ required: true, message: 'Please enter the expiry year!' }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="CVV"
        name="cvv"
        rules={[{ required: true, message: 'Please enter the CVV on your card!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={onPrev} style={{ marginRight: 8 }}>
          Previous
        </Button>
        <Button type="primary" htmlType="submit">
          Finish
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PaymentDetailsForm;
