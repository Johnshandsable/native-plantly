import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        location: location,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <Typography>Register User</Typography>
      {errors.registrationMessage && (
        <Typography className="alert" role="alert">
          {errors.registrationMessage}
        </Typography>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="location">
          State Abbreviation:
          <input
            type="text"
            name="location"
            value={location}
            required
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button
          color="primary"
          variant="outlined"
          value="Register"
          name="submit"
        >
          Submit
        </Button>
        {/* <input className="btn" type="submit" name="submit" value="Register" /> */}
      </div>
    </form>
  );
}

export default RegisterForm;
