import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUser';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

// fake data
import user from '../../data/user';

export default function App() {
  const browserHistory = useHistory();
  const [currentUser, setCurrentUser] = React.useState(user);

  function logout() {
    setCurrentUser({ authorized: false });
    browserHistory.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>

        <Route exact path='/'>
          <Header />
          <Landing />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header />
          <Profile onLogout={logout} />
        </Route>
        <Route path='*'></Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}
