import React from 'react';
import { useFormik } from 'formik';
import validate from './validation'
import selectApi from './api'
import {
  Section,
  Wrapper,
  Row,
  Col6,
  Title,
  Subtitle,
  Form,
  Wrap,
  Label,
  Upload,
  Inner,
  Input,
  TypeFile,
  Textarea,
  Select,
  Option,
  Errors,
  Btn,
  Sidebar,
  Info,
  InfoTitle,
  InfoDescription,
  InfoLink
} from './styles'

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

  const optionSelect = selectApi.map(item =>
    <Option key={item.id} value={item.value}>{item.text}</Option>
  )

  return (
    <>
      <Section>
        <Wrapper>
          <Row>
            <Col6>
              <Title>Sign up and start working online</Title>
              <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
              
              <Form onSubmit={formik.handleSubmit}>
                <Wrap>
                  <Label htmlFor="firstName">First Name</Label>
                  <Inner>
                    <Input
                      error={formik.errors.firstName}
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    <Errors>
                      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    </Errors>
                  </Inner>
                </Wrap>

                <Wrap>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Inner>
                    <Input
                      error={formik.errors.lastName}
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    <Errors>
                      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    </Errors>
                  </Inner>
                </Wrap>

                <Wrap>
                  <Label htmlFor="email">Email Address</Label>
                  <Inner>
                    <Input
                      error={formik.errors.email}
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <Errors>
                      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </Errors>
                  </Inner>
                </Wrap>

                <Wrap>
                  <Label htmlFor="phone">Phone</Label>
                  <Inner>
                    <Input
                      error={formik.errors.phone}
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="+373 xx-xxx-xxx"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                    <Errors>
                      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
                    </Errors>
                  </Inner>
                </Wrap>

                <Wrap>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Inner>
                    <Select
                      error={formik.errors.specialization}
                      name="specialization"
                      onChange={formik.handleChange}
                      value={formik.values.specialization}
                    >
                      {optionSelect}
                    </Select>
                    <Errors>
                      {formik.errors.specialization ? <div>{formik.errors.specialization}</div> : null}
                    </Errors>
                  </Inner>
                </Wrap>

                <Wrap>
                  <Label htmlFor="upload">Photo</Label>
                  <Inner>
                    <Upload
                      error={formik.errors.upload}>
                      {`${formik.values.upload ? formik.values.upload : "Upload picture"}`}
                      <TypeFile
                        type="file"
                        name="upload"
                        onChange={formik.handleChange}
                        value={formik.values.upload}
                      />
                    </Upload>
                    <Errors>
                      {formik.errors.upload ? <div>{formik.errors.upload}</div> : null}
                    </Errors>
                  </Inner>
                </Wrap>

                <Wrap>
                  <Label htmlFor="message">Message (optional)</Label>
                  <Inner>
                    <Textarea
                      className="registration__textarea"
                      id="message"
                      name="message"
                      rows="5"
                      cols="33"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />
                  </Inner>
                </Wrap>

                <Btn type="submit">Registration</Btn>
              </Form>
            </Col6>

            <Col6>
              <Sidebar>
                <Info>
                  <InfoTitle>Do you need a doctor consultation?</InfoTitle>
                  <InfoDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</InfoDescription>
                  <InfoLink to="/">Sign up for patients</InfoLink>
                </Info>

                <Info>
                  <InfoTitle>Already have an account?</InfoTitle>
                  <InfoDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</InfoDescription>
                  <InfoLink to="/">Log in for patients</InfoLink>
                </Info>

                <Info>
                  <InfoTitle>Already have an account?</InfoTitle>
                  <InfoDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</InfoDescription>
                  <InfoLink to="/">Log in for Doctors</InfoLink>
                </Info>
              </Sidebar>
            </Col6>

          </Row>
        </Wrapper>
        
      </Section>
    </>
    
  );
};

export default Registration
