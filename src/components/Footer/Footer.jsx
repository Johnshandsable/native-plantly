import React from 'react';
import './Footer.css';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © John Shands '}
      {new Date().getFullYear()}
      {'.'}
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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Created with
        </Typography>
        <img
          className="img-icon"
          src={process.env.PUBLIC_URL + '/react.png'}
        ></img>
        <img
          className="img-icon"
          src={process.env.PUBLIC_URL + '/mui.png'}
        ></img>
        <img
          className="img-node"
          src={process.env.PUBLIC_URL + '/node.png'}
        ></img>
        <img className="img-js" src={process.env.PUBLIC_URL + '/js.png'}></img>
        <img
          className="img-html"
          src={process.env.PUBLIC_URL + '/html-css.png'}
        ></img>
        <Typography variant="body1">
          Special thanks to{' '}
          <a href="https://explorer.natureserve.org/api-docs/">NatureServe</a>{' '}
          and <a href="https://trefle.io/">Trefle</a> for plant data
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">All rights reserved.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
