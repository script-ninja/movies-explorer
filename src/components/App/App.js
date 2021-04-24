import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signin'></Route>
        <Route path='/signup'></Route>

        <Route exact path='/'>
          <Header />
          <Main></Main>
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
  );
}

export default App;
