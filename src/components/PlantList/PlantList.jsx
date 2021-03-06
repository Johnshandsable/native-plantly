import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// CUSTOM COMPONENTS
import PlantItem from '../PlantItem/PlantItem';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function PlantList() {
  const dispatch = useDispatch();
  const plantList = useSelector((store) => store.plants.plantReducer);
  const dropdownList = useSelector((store) => store.garden);

  useEffect(() => {
    getGardenDropdown();
    getPlants();
  }, []);

  const getPlants = function () {
    dispatch({
      type: 'GET_PLANTS',
    });
  }; // end getPlants

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
      {' '}
      {/* spacing of Grid must be used on container */}
      <Grid container spacing={3}>
        {plantList.map((plant, index) => {
          return (
            <PlantItem key={index} plant={plant} dropdownList={dropdownList} />
          );
        })}
      </Grid>
    </div>
  );
}

export default PlantList;
