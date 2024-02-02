import React from "react";
import { Typography, Divider } from "antd";

const { Title, Text } = Typography;

const Summary = ({ formData }) => {
  return (
    <div style={{ maxWidth: "200px", margin: "0 auto", textAlign: "left" }}>
      <Title level={2}>Summary</Title>
      <Divider />

      <div className="scrollLeft">
        <div className="personal scroll">
          <Title level={4}>Personal Details</Title>
          <Text strong>First Name:</Text> {formData.firstName}
          <br />
          <Text strong>Last Name:</Text> {formData.lastName}
          <br />
          <Text strong>Email:</Text> {formData.email}
          <br />
          <Text strong>Phone Number:</Text> {formData.phoneNumber}
          <br />
        </div>
        <div className="address scroll">
          <Title level={4}>Address Details</Title>
          <Text strong>Address Line 1:</Text> {formData.addressLine1}
          <br />
          <Text strong>Nearest Landmark:</Text> {formData.landmark}
          <br />
          <Text strong>City:</Text> {formData.city}
          <br />
          <Text strong>State:</Text> {formData.state}
          <br />
          <Text strong>Country:</Text> {formData.country}
          <br />
          <Text strong>Country Code:</Text> {formData.countryCode}
          <br />
          <Text strong>Zip Code:</Text> {formData.zipCode}
          <br />
        </div>
        <div className="payment scroll" >
          <Title level={4}>Payment Details</Title>
          <Text strong>Name on Card:</Text> {formData.nameOnCard}
          <br />
          <Text strong>Credit Card Number:</Text> {formData.creditCardNumber}
          <br />
          <Text strong>Expiry Month:</Text> {formData.expiryMonth}
          <br />
          <Text strong>Expiry Year:</Text> {formData.expiryYear}
          <br />
          <Text strong>CVV:</Text> {formData.cvv}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Summary;
