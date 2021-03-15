import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

function SearchBar() {
  const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.secondary.main, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.secondary.main, 0.25),
      },
      marginLeft: 0,
      width: '25%',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(2),
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(5),
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
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default SearchBar;
