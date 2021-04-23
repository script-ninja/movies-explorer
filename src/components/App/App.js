import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Main>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
