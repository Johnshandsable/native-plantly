import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// CUSTOM COMPONENTS
import GardenItem from '../Tables/GardenItem';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

function GardenTable({ gardenList, dropdownSelection }) {
  // const dispatch = useDispatch();

  // const handleDeletePlant = (evt) => {
  //   console.log('currentTarget', evt.currentTarget.value);
  //   dispatch({
  //     type: 'DELETE_PLANT',
  //     payload: {
  //       id: evt.currentTarget.value,
  //       sectionId: dropdownSelection,
  //     },
  //   });
  // };

  return (
    <Grid container spacing={3}>
      {gardenList.map((plant, index) => {
        return (
          <GardenItem
            key={index}
            plant={plant}
            dropdownSelection={dropdownSelection}
          />
        );
      })}
    </Grid>
  );
}

export default GardenTable;
