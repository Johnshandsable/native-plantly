// MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/Send';

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
        marginTop: 120,
        maxWidth: 200,
      },
    },
    searchIcon: {
      padding: theme.spacing(0.5, 21),
      height: '90%',
      display: 'inline-block',
      position: 'absolute',
    },
    sendIcon: {
      display: 'inline-block',
      marginLeft: 250,
      top: 0,
      zIndex: '-1',
    },
  }));
  const classes = useStyles();

  // Event handlers
  const handleSearch = (evt) => {
    console.log(evt);
    console.log('search is happening');
  };

  return (
    <>
      <div className={classes.search}>
        <Grid>
          <Grid item xs={3}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
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
      <SendIcon className={classes.sendIcon} onClick={handleSearch} />
    </>
  );
}

export default SearchBar;
