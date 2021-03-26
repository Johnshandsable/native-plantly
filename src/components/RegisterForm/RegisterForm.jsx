import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  // event handlers
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
    <div class="overlay">
      <form onSubmit={registerUser}>
        <div className="con">
          <header className="head-form">
            <Typography
              variant="h2"
              style={{
                fontFamily: 'redressed',
                marginBottom: 20,
              }}
            >
              Registration
            </Typography>
          </header>
          <br />
          <div className="field-set">
            <input
              className="form-input"
              id="txt-input"
              placeholder="username"
              required
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <input
              className="form-input"
              id="pwd"
              name="password"
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />{' '}
            <br />
            <input
              className="form-input"
              placeholder="state abbreviation"
              type="text"
              name="location"
              value={location}
              required
              onChange={(event) => setLocation(event.target.value)}
            />
            <br />
            <Button
              color="secondary"
              type="submit"
              variant="contained"
              value="Log In"
              style={{
                width: '100%',
                marginTop: 30,
              }}
            >
              {' '}
              Register{' '}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
