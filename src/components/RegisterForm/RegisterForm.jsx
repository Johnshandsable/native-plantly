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

  // custom styling
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 100,
      marginBottom: 50,
      marginLeft: 20,
      marginRight: 20,
      height: 'fixed',
    },
  }));
  // Setup classes
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={registerUser}>
            <Typography
              variant="h4"
              style={{
                fontFamily: 'Redressed',
              }}
            >
              Register User
            </Typography>
            {errors.registrationMessage && (
              <Typography className="alert" role="alert">
                {errors.registrationMessage}
              </Typography>
            )}
            {/* <div>
        <label htmlFor="username"> */}
            {/* Username: */}
            <input
              placeholder="username"
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />{' '}
            <br />
            {/* </label>
      </div> */}
            {/* <div>
        <label htmlFor="password"> */}
            {/* Password: */}
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />{' '}
            <br />
            {/* </label>
      </div> */}
            {/* <div>
        <label htmlFor="location">
          State Abbreviation: */}
            <input
              placeholder="state abbreviation"
              type="text"
              name="location"
              value={location}
              required
              onChange={(event) => setLocation(event.target.value)}
            />{' '}
            <br />
            {/* </label>
      </div> */}
            {/* <div> */}
            <Button
              color="primary"
              variant="contained"
              value="Register"
              name="submit"
              style={{
                marginBottom: 20,
              }}
            >
              Submit
            </Button>
            {/* <input className="btn" type="submit" name="submit" value="Register" /> */}
            {/* </div> */}
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default RegisterForm;
