import React from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <MenuItem
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      // className={props.className}
      component={Button}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Logout
    </MenuItem>
  );
}

export default LogOutButton;
