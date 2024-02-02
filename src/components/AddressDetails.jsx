// AddressDetailsForm.js
import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const AddressDetailsForm = ({ formData, setFormData, onPrev, onNext }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Address Form values:', values);
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
        label="Address Line 1"
        name="addressLine1"
        rules={[{ required: true, message: 'Please enter your address!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Nearest Landmark" name="landmark">
        <Input />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please enter your city!' }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="State" name="state" rules={[{ required: true, message: 'Please enter your state!' }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please enter your country!' }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Country Code" name="countryCode">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Zip Code" name="zipCode" rules={[{ required: true, message: 'Please enter your zip code!' }]}>
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

export default AddressDetailsForm;
