import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// CUSTOM COMPONENTS
import GardenDropdown from '../Dropdown/GardenDropdown';
import CreateNewDropDownButton from '../Buttons/CreateNewDropdownButton';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Garden() {
  const dispatch = useDispatch();

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
      <CreateNewDropDownButton />
      <GardenDropdown />
    </div>
  );
}

export default Garden;
