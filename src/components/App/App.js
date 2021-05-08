import './App.css';
import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// contexts
import CurrentUserContext from '../../contexts/CurrentUser';

// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';

// api
import api from '../../utils/api';

export default function App() {
  const browserHistory = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});

  // авторизация
  function login(credentials) {
    api.authorize(credentials)
      .then(({ token }) => {
        localStorage.setItem('token', token);
        return api.checkToken(token);
      })
      .then(user => {
        setCurrentUser({ ...user, authorized: true });
        browserHistory.push('/movies');
      })
      .catch(err => console.log(err));
  }

  // выход из аккаунта
  function logout() {
    setCurrentUser({ authorized: false });
    localStorage.removeItem('token');
    browserHistory.push('/');
  }

  // проверка токена при монитровании App
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.checkToken(token)
        .then(user => {
          setCurrentUser({ ...user, authorized: true });
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path='/signin'>
          <Login onLogin={login} />
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
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}
