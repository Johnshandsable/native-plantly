import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

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
        <Grid
          item
          xs={12}
          style={{
            justifyContent: 'center',
          }}
        >
          <form onSubmit={login}>
            <Typography
              variant="h4"
              style={{
                fontFamily: 'Redressed',
              }}
            >
              Login
            </Typography>
            {errors.loginMessage && (
              <Typography
                variant="h4"
                style={{
                  color: '#e74c3c',
                }}
              >
                {errors.loginMessage}
              </Typography>
            )}
            {/* <label htmlFor="username">
              Username */}
            <input
              placeholder="username"
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {/* </label>{' '} */}
            <br />
            {/* <label htmlFor="password">
              Password */}
            <input
              placeholder="password"
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />{' '}
            <br />
            {/* </label>{' '} */}
            <br />
            <Button
              color="primary"
              type="submit"
              variant="contained"
              value="Log In"
              style={{
                marginBottom: 20,
              }}
            >
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginForm;
