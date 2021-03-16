// MATERIAL UI
// import SearchIcon from '@material-ui/icons/Search'; -- optional
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';

function SearchBar() {
  const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.secondary.main, 0.5),
      '&:hover': {
        backgroundColor: fade(theme.palette.secondary.main, 0.75),
      },
      marginLeft: 0,
      width: '25%',
      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(2),
        marginLeft: theme.spacing(3),
        marginTop: 100,
        maxWidth: 200,
      },
    },
    // searchIcon: {
    //   padding: theme.spacing(0, 2),
    //   height: '100%',
    //   position: 'absolute',
    //   pointerEvents: 'none',
    //   display: 'flex',
    //   alignItems: 'left',
    //   justifyContent: 'left',
    // },
  }));

  const classes = useStyles();

  return (
    <div className={classes.search}>
      {/* <div className={classes.searchIcon}>
        <SearchIcon />
      </div> */}
      <Grid>
        <Grid item xs={12}>
          <InputBase
            placeholder="search by species..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchBar;
