import './Landing.css';
import Main from '../Main/Main';
import Promo from './Promo/Promo';
import Project from './Project/Project';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';


export default function Landing() {
  return (<>
    <Main>
      <Promo />
      <Project />
      <Techs />
      <AboutMe />
    </Main>
  </>);
}