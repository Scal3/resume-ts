import './App.css';
import React, { FC } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import MyTechsSkills from '../MyTechsSkills/MyTechsSkills';
import MyProjects from '../MyProjects/MyProjects';
import WorkExperience from '../WorkExperience/WorkExperience';
import CurrentWork from '../CurrentWork/CurrentWork';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
const Fade = require("react-reveal/Fade")


const App: FC = () => {
  return (
    <div className="App">
      <Fade top>
        <AboutMe/>
      </Fade>
      <Fade left>
        <MyTechsSkills/>
      </Fade>
      <Fade left>
        <MyProjects/>
      </Fade>
      <Fade left>
        <WorkExperience/>
      </Fade>
      <Fade left>
        <CurrentWork/>
      </Fade>
      <Fade left>
        <Contacts/>
      </Fade>
      <Fade left>
        <Footer/>
      </Fade>
    </div>
  );
}

export default App;