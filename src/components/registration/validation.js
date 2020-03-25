const validate = values => {
    const errors = {};
  
    if (!values.firstName) {
      errors.firstName = 'Required';
      return errors;
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
      return errors;
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
      return errors;
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
      return errors;
    }
  
    if (!values.email) {
      errors.email = 'Required';
      return errors;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
      return errors;
    }
  
    if (!values.phone) {
      errors.phone = 'Required';
      return errors;
    } else if (values.phone.length > 20) {
      errors.phone = 'Must be 20 characters or less';
      return errors;
    }
  
    if (!values.specialization) {
      errors.specialization = 'Required';
      return errors;
    }
  
    if (!values.upload) {
      errors.upload = 'Required';
      return errors;
    }
  
    return null;
  };

  export default validate