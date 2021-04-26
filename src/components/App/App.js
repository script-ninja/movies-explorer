import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUser';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    _id: null,
    name: 'Username',
    email: 'email@email.box',
    authorized: true,
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Switch>
          <Route path='/signin'></Route>
          <Route path='/signup'></Route>

          <Route exact path='/'>
            <Header />
            <Landing />
            <Footer />
          </Route>
          <Route path='/movies'>
            <Header />
            <Main></Main>
            <Footer />
          </Route>
          <Route path='/saved-movies'>
            <Header />
            <Main></Main>
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header />
          </Route>
          <Route path='*'></Route>
        </Switch>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
