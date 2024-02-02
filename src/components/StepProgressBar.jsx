// StepProgressBar.js
import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const StepProgressBar = ({ currentStep }) => {
  return (
    <Steps current={currentStep - 1} size="small">
      <Step title="Personal Details" />
      <Step title="Address Details" />
      <Step title="Payment Details" />
    </Steps>
  );
};

export default StepProgressBar;
