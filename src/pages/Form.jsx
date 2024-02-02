// App.js
import React, { useState } from 'react';
import PersonalDetailsForm from '../components/PersonalDetails'; // Corrected import
import AddressDetailsForm from '../components/AddressDetails'; // Corrected import
import PaymentDetailsForm from '../components/CardDetails'; // Corrected import
import StepProgressBar from '../components/StepProgressBar';
import Summary from '../components/Summary';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    addressLine1: '123 Main Street',
    landmark: 'Near Park',
    city: 'Cityville',
    state: 'Stateville',
    country: 'Countryland',
    countryCode: '+1',
    zipCode: '12345',
    nameOnCard: 'John Doe',
    creditCardNumber: '1234 5678 9012 3456',
    expiryMonth: '12',
    expiryYear: '2024',
    cvv: '123',
  });
  

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = () => {
    // Handle final submission logic
    console.log('All form values submitted!');
  };

  const getFormComponent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsForm formData={formData} onNext={handleNext} setFormData={setFormData} onPrev={handlePrev} />;
      case 2:
        return <AddressDetailsForm formData={formData} onNext={handleNext} setFormData={setFormData} onPrev={handlePrev} />;
      case 3:
        return <PaymentDetailsForm formData={formData} onNext={handleNext} setFormData={setFormData} onPrev={handlePrev} />;

      default:
        return null;
    }
  };

  return (

    <section id="main-section">
      <div>

      <StepProgressBar currentStep={currentStep} />
    <div className='main bxsh' style={{ padding: '20px' }}>
      {currentStep === 4 ? <Summary formData={formData}/> : getFormComponent()}
    </div>
      </div>
    </section>
  );
};

export default Form;
