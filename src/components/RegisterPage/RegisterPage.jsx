import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

import Button from '@material-ui/core/Button';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className="background">
      <div className="background-video">
        <video
          src={process.env.PUBLIC_URL + 'sunflower.mp4'}
          muted
          loop
          autoPlay
        >
          {' '}
        </video>
      </div>
      <RegisterForm />
      <center>
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          style={{
            width: 270,
            marginTop: 30,
          }}
          onClick={() => {
            history.push('/login');
          }}
        >
          Go To Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
