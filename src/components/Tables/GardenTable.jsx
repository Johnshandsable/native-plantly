import { useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import GardenItem from '../Tables/GardenItem';

// MATERIAL UI
import Grid from '@material-ui/core/Grid';

function GardenTable() {
  const gardenList = useSelector(
    (store) => store.plants.plantsBySectionReducer
  );
  console.log('listOfPlants', gardenList);

  return (
    <Grid container spacing={3}>
      <h1>HELLOOOOOOOOOO WE MADE IT</h1>
      {gardenList.map((plant, index) => {
        return <GardenItem plant={plant} />;
      })}
    </Grid>
  );
}

export default GardenTable;
