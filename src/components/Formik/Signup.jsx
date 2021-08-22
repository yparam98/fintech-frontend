import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

export const Signup = () => {
  let history = useHistory();
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        localStorage.setItem('Data',JSON.stringify(values))
        history.push('/dashboard');
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <div role="group" aria-labelledby="my-radio-group">
            <table>
            <label>
            I am a
            </label>
            <tr>
            <label>
              <Field classname="form-check-input" type="radio" name="role" value="foodie"/>
              Foodie   
            </label>
            </tr>
            <tr>
            <label>
              <Field classname="form-check-input" type="radio" name="role" value="chef" />
              Chef
            </label>
            </tr>
            </table>
          </div>
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <row>
            <tr>
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            </tr>
            <tr>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
            </tr>
            </row>
          </Form>
        </div>
      )}
    </Formik>
  )
}