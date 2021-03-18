import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

// LOCAL STATE
import { useState } from 'react';

// MATERIAL UI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  // Styles for navigation bar
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontFamily: 'Redressed',
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  // Styles
  // Need this line to be able to inherit custom themes
  const classes = useStyles();

  // Handling MenuIcon showing dropdown on click
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap>
            Native Plantly
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            className={classes.inputRoot}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              className={classes.inputRoot}
              component={Link}
              to="/home"
              onClick={handleClose}
            >
              Home
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleClose}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/my-gardens" onClick={handleClose}>
              My Gardens
            </MenuItem>
            <MenuItem component={Link} to={loginLinkData.path}>
              {loginLinkData.text}
            </MenuItem>
            <MenuItem
              component={Button}
              onClick={() => dispatch({ type: 'LOGOUT' })}
            >
              Logout
            </MenuItem>{' '}
            {/* <LogOutButton className="navLink" /> */}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
