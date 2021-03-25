import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

// MATERIAL UI
import Button from '@material-ui/core/Button';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="background">
      <LoginForm />
      <center>
        <Button
          style={{
            width: 270,
            marginTop: 30,
          }}
          color="secondary"
          variant="contained"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Go To Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
