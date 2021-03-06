import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// CUSTOM COMPONENTS
import GardenItem from '../Tables/GardenItem';

// MATERIAL UI
import Grid from '@material-ui/core/Grid';

function GardenTable({ gardenList, dropdownSelection }) {
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
