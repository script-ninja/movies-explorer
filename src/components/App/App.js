import './App.css';
import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

// contexts
import CurrentUserContext from '../../contexts/CurrentUser';

// components
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
  const [isLoading, setIsLoading] = React.useState(true);

  // регистрация
  function register(regData) {
    return api.register(regData)
      .then(user => {
        setCurrentUser({ ...user, authorized: true });
        return api.authorize({ email: regData.email, password: regData.password });
      })
      .then(({ token }) => {
        localStorage.setItem('token', token);
        browserHistory.push('/movies');
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  // авторизация
  function login(credentials) {
    return api.authorize(credentials)
      .then(({ token }) => {
        localStorage.setItem('token', token);
        return api.checkToken(token);
      })
      .then(user => {
        setCurrentUser({ ...user, authorized: true });
        browserHistory.push('/movies');
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  // обновление профиля
  function updateProfile(data) {
    return api.updateProfile(data)
      .then(user => {
        setCurrentUser({ ...user, authorized: true });
        return Promise.resolve('Информация профиля обновлена');
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  // выход из аккаунта
  function logout() {
    setCurrentUser({ authorized: false });
    localStorage.clear();
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
        .catch(err => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
    else setIsLoading(false);
  }, []);

  return (
    isLoading
    ? <Preloader />
    :
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Landing />
          <Footer />
        </Route>
        <Route exact path='/signin'>
          {
            currentUser.authorized ? <Redirect to='/movies' /> : <Login onLogin={login} />
          }
        </Route>
        <Route exact path='/signup'>
          {
            currentUser.authorized ? <Redirect to='/movies' /> : <Register onRegister={register} />
          }
        </Route>

        <ProtectedRoute exact path='/movies' authorized={currentUser.authorized}>
          <Header />
          <Movies />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute exact path='/saved-movies' authorized={currentUser.authorized}>
          <Header />
          <SavedMovies />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute exact path='/profile' authorized={currentUser.authorized}>
          <Header />
          <Profile onUpdate={updateProfile} onLogout={logout} />
        </ProtectedRoute>

        <Route path='/'>
          <Page404 />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}
