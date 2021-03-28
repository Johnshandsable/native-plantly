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
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            {/* <input
              className="form-input"
              placeholder="state abbreviation"
              type="text"
              name="location"
              value={location}
              required
              onChange={(event) => setLocation(event.target.value)}
            /> */}
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
