import React from 'react';
import './Register.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const data = await axios.post(
          'http://localhost:5000/api/users/register',
          values
        );
        navigate('/userInfo');
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-container">
        <div className="label-container">
          <TextField
            label="firstName"
            variant="outlined"
            required
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          <TextField
            label="lastName"
            variant="outlined"
            id="lastName"
            name="lastName"
            required
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          <TextField
            label="Email"
            variant="outlined"
            id="email"
            required
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <TextField
            label="city"
            variant="outlined"
            required
            id="email"
            name="city"
            type="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          {formik.errors.city ? <div>{formik.errors.city}</div> : null}
          <TextField
            label="password"
            variant="outlined"
            id="email"
            required
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <Button variant="contained" type="submit">
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Register;
