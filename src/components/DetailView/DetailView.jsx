import { useSelector } from 'react-redux';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';

function DetailView() {
  const detailedPlant = useSelector((store) => store.plants.singlePlantReducer);

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

  console.log(detailedPlant);
  return <div>hello</div>;
}

export default DetailView;
