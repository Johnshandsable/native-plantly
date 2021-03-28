import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// Custom Components
import AboutPage from '../AboutPage/AboutPage';
import DetailView from '../DetailView/DetailView';
import Footer from '../Footer/Footer';
import Garden from '../Garden/Garden';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import Nav from '../Nav/Nav';
import PlantList from '../PlantList/PlantList';
import RegisterPage from '../RegisterPage/RegisterPage';
import SearchBar from '../SearchBar/SearchBar';
import UserPage from '../UserPage/UserPage';

// Material UI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';
let array = [];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#83a668',
      },
      secondary: {
        main: '#6c5ce7',
      },
    },
  });

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Home Route */}
            <ProtectedRoute path="/home" exact>
              <Nav />
              <SearchBar />
              <PlantList />
              <Footer />
            </ProtectedRoute>

            {/* About Route */}
            <Route path="/about">
              <Nav />
              <AboutPage />
              <Footer />
            </Route>

            {/* Details View for Single Plants */}
            <ProtectedRoute path="/details/">
              <Nav />
              <DetailView />
              <Footer />
            </ProtectedRoute>

            {/* My Gardens Route */}
            <ProtectedRoute path="/my-gardens">
              <Nav />
              <Garden />
              <Footer />
            </ProtectedRoute>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>

            {/* <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
            >
              <InfoPage />
            </ProtectedRoute> */}

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              authRedirect="/home"
            >
              <LoginPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              authRedirect="/login"
            >
              <RegisterPage />
            </ProtectedRoute>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
