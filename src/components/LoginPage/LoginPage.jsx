import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

// MATERIAL UI
import Button from '@material-ui/core/Button';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
      <Button
        style={{
          marginLeft: 15,
        }}
        color="secondary"
        variant="contained"
        onClick={() => {
          history.push('/registration');
        }}
      >
        Register
      </Button>
    </div>
  );
}

export default LoginPage;
