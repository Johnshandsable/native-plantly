// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';

function Garden() {
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
      <h1>hellooooooooooooo</h1>
    </div>
  );
}

export default Garden;
