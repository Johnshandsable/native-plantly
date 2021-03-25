import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

import Button from '@material-ui/core/Button';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />
      <Button
        color="secondary"
        variant="contained"
        type="submit"
        style={{
          marginLeft: 15,
        }}
        onClick={() => {
          history.push('/login');
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default RegisterPage;
