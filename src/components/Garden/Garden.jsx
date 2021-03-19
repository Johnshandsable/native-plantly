import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// CUSTOM COMPONENTS
import SimpleDropdown from '../Dropdown/SimpleDropdown';
import CreateNewDropDownButton from '../Buttons/CreateNewDropdownButton';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Garden() {
  const dispatch = useDispatch();
  const dropdownList = useSelector((store) => store.garden);

  useEffect(() => {
    getGardenDropdown();
  }, []);

  const getGardenDropdown = () => {
    dispatch({
      type: 'GET_DROPDOWN',
    });
  }; // end getGardenDropdown

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
      <SimpleDropdown dropdownList={dropdownList} />
      <CreateNewDropDownButton />
      <h1>hellooooooooooooo</h1>
    </div>
  );
}

export default Garden;
