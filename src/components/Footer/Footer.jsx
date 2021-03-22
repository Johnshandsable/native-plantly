import React from 'react';
import './Footer.css';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

/*




export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
*/

function Footer() {
  const useStyles = makeStyles({
    left: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'left',
      margin: 0,
      padding: 0,
    },
  });

  const classes = useStyles();

  return (
    <div className="footer-clean">
      <BottomNavigation showLabels className={classes.left}>
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
        {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
        <Typography variant="body2" color="textSecondary" component="p">
          John Shands © 2021
        </Typography>
      </BottomNavigation>
      <BottomNavigation showLabels className={classes.center}>
        <Typography variant="body2" color="textSecondary" component="p">
          Built using NatureServe Data. 2021. NatureServe, Arlington, Virginia.
          Source:{' '}
          <a href="https://explorer.natureserve.org/">
            explorer.natureserve.org/
          </a>
        </Typography>{' '}
      </BottomNavigation>
      <BottomNavigation showLabels className={classes.center}>
        <Typography variant="body2" color="textSecondary" component="p">
          Built using Trefle Data. 2021. Trefle.io/ Source:{' '}
          <a href="https://trefle.io/">trefle.io/</a>
        </Typography>
      </BottomNavigation>
    </div>
  );
}

export default Footer;
