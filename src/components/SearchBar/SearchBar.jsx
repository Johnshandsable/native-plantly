import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';

function SearchBar() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const useStyles = makeStyles((theme) => ({
    search: {
      paddingLeft: 10,
      marginLeft: 20,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.secondary.main, 0.5),
      '&:hover': {
        backgroundColor: fade(theme.palette.secondary.main, 0.75),
      },
      width: '100%',
      height: '100%',
      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(2),
        marginLeft: theme.spacing(3),
      },
    },
    sendIcon: {
      display: 'inline-block',
      marginLeft: 275,
      top: 0,
      zIndex: '-1',
    },
  }));
  const classes = useStyles();

  // Event handlers
  const handleSearch = (evt) => {
    if (searchValue === '') {
      return;
    } else {
      dispatch({
        type: 'SEARCH_PLANTS',
        payload: searchValue,
      });
      setSearchValue('');
    }
  };

  const handleChangeSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <>
      <div className="search-container">
        <Grid>
          <Grid item xs={12}>
            <div className={classes.search}>
              <InputBase
                placeholder="search by species..."
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={handleChangeSearchValue}
              />
            </div>
          </Grid>
        </Grid>

        <Button
          color="primary"
          variant="outlined"
          endIcon={<SendIcon />}
          onClick={handleSearch}
          style={{
            marginLeft: 50,
            height: '100%',
            marginRight: 50,
          }}
        >
          Search
        </Button>
      </div>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={{
          marginLeft: 30,
          marginTop: 5,
        }}
      >
        search powered by{' '}
        <a href="https://explorer.natureserve.org/api-docs/">NatureServe</a> and{' '}
        <a href="https://trefle.io/">Trefle</a>
      </Typography>
    </>
  );
}

export default SearchBar;
