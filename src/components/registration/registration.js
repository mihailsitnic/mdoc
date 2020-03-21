import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import './styles.css'

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

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialization: '',
      upload: '',
      message: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Fragment>
      <section className="registration">
        <div className="wrapper">
          <div className="row">
            <div className="col-6">
              <article className="registration__article">
                <h1 className="registration__title">Sign up and start working online</h1>
                <p className="registration__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </article>
              
              <form onSubmit={formik.handleSubmit} className="registration__form">

                <div className="registration__wrap">
                  <label className="registration__label" htmlFor="firstName">First Name</label>
                  <div className="registration__inner">
                    <input
                      className={`registration__input ${formik.errors.firstName ? '--error' : ''}`}
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    <span className="registration__errors">
                      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    </span>
                  </div>
                </div>

                <div className="registration__wrap">
                  <label className="registration__label" htmlFor="lastName">Last Name</label>
                  <div className="registration__inner">
                    <input
                      className={`registration__input ${formik.errors.lastName ? '--error' : ''}`}
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    <span className="registration__errors">
                      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    </span>
                  </div>
                </div>

                <div className="registration__wrap">
                  <label className="registration__label" htmlFor="email">Email Address</label>
                  <div className="registration__inner">
                    <input
                      className={`registration__input ${formik.errors.email ? '--error' : ''}`}
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <span className="registration__errors">
                      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </span>
                  </div>
                </div>

                <div className="registration__wrap">
                  <label className="registration__label" htmlFor="phone">Phone</label>
                  <div className="registration__inner">
                    <input
                      className={`registration__input ${formik.errors.phone ? '--error' : ''}`}
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="+373 xx-xxx-xxx"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                    <span className="registration__errors">
                      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
                    </span>
                  </div>
                </div>

                <div className="registration__wrap">
                  <label className="registration__label" htmlFor="specialization">Specialization</label>
                  <div className="registration__inner">
                    <select
                      className={`registration__select ${formik.errors.specialization ? '--error' : ''}`}
                      name="specialization"
                      onChange={formik.handleChange}
                      value={formik.values.specialization}
                    >
                      <option className="registration__option" value="">Specialization</option>
                      <option className="registration__option" value="Homeopathist">Homeopathist</option> 
                      <option className="registration__option" value="Dermatologist">Dermatologist</option>
                      <option className="registration__option" value="Nutritionist">Nutritionist</option>
                      <option className="registration__option" value="Pediatrician">Pediatrician</option>
                      <option className="registration__option" value="Psychologist">Psychologist</option>
                    </select>
                    <span className="registration__errors">
                      {formik.errors.specialization ? <div>{formik.errors.specialization}</div> : null}
                    </span>
                  </div>
                </div>

                <div className="registration__wrap">
                  <label className="registration__label" htmlFor="upload">Photo</label>
                  <div className="registration__inner">
                    <label className={`registration__upload ${formik.errors.upload ? '--error' : ''}`}>
                      {`${formik.values.upload ? formik.values.upload : "Upload picture"}`}
                      <input
                        className="registration__type-file"
                        type="file"
                        name="upload"
                        onChange={formik.handleChange}
                        value={formik.values.upload}
                      />
                    </label>
                    <span className="registration__errors">
                      {formik.errors.upload ? <div>{formik.errors.upload}</div> : null}
                    </span>
                  </div>
                </div>

                <div className="registration__wrap">
                  <label className="registration__label" htmlFor="message">Message (optional)</label>
                  <div className="registration__inner">
                    <textarea
                      className="registration__textarea"
                      id="message"
                      name="message"
                      rows="5"
                      cols="33"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />
                  </div>
                </div>

                <div className="input-wrap">
                  <button className="registration__btn" type="submit">Registration</button>
                </div>
                
            </form>
            </div>
            <div className="col-6">
              <aside className="registration__sidebar">
                <article className="registration__info">
                  <h3 className="registration__info-title">Do you need a doctor consultation?</h3>
                  <p className="registration__info-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link className="registration__info-link" to="/">Sign up for patients</Link>
                </article>

                <article className="registration__info">
                  <h3 className="registration__info-title">Already have an account?</h3>
                  <p className="registration__info-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link className="registration__info-link" to="/">Log in for patients</Link>
                </article>

                <article className="registration__info">
                  <h3 className="registration__info-title">Already have an account?</h3>
                  <p className="registration__info-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link className="registration__info-link" to="/">Log in for Doctors</Link>
                </article>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    
  );
};

export default Registration