import { useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import GardenItem from '../Tables/GardenItem';

// MATERIAL UI
import Grid from '@material-ui/core/Grid';

function GardenTable({ gardenList }) {
  // const gardenList = useSelector(
  //   (store) => store.plants.plantsBySectionReducer
  // );
  console.log('listOfPlants', gardenList);

  return (
    <Grid container spacing={3}>
      {gardenList.map((plant, index) => {
        return <GardenItem key={index} plant={plant} />;
      })}
    </Grid>
  );
}

export default GardenTable;
