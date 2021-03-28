import React from 'react';
import './Footer.css';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © John Shands'}
      <Link
        color="inherit"
        href="https://github.com/Johnshandsable"
      ></Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      <GitHubIcon />
    </Typography>
  );
}

function Footer() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    },
  }));

  // const useStyles = makeStyles({
  //   left: {
  //     width: '100%',
  //     alignItems: 'center',
  //     justifyContent: 'left',
  //     margin: 0,
  //     padding: 0,
  //   },
  //   center: {
  //     width: '100%',
  //     alignItems: 'center',
  //     justifyContent: 'left',
  //     margin: 0,
  //     padding: 0,
  //   },
  // });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Created with
        </Typography>
        <img
          className="img-icon"
          src={process.env.PUBLIC_URL + '/mui.png'}
        ></img>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">All rights reserved.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
    // <div className="footer-clean">
    //   <BottomNavigation showLabels className={classes.left}>
    //     <BottomNavigationAction
    //       style={{
    //         margin: 0,
    //         padding: 0,
    //       }}
    //       label="GitHub"
    //       icon={<GitHubIcon />}
    //     />
    //     <Typography variant="body2" color="textSecondary" component="p">
    //       John Shands © 2021
    //     </Typography>{' '}
    //     <br />
    //   </BottomNavigation>
    // </div>
  );
}

export default Footer;
