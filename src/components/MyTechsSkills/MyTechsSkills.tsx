import './MyTechsSkills.css';
import React, { FC } from 'react';
import htmlLogo from '../../Assets/HTML5_logo.svg.png';
import cssLogo from '../../Assets/CSS3_logo.svg.png';
import jsLogo from '../../Assets/js_logo.svg.png';
import reactLogo from '../../Assets/logo.svg';
import reduxLogo from '../../Assets/redux.svg';
import nodeJsLogo from '../../Assets/Node.js_logo.svg.png';
import MongoDbLogo from '../../Assets/MongoDB_Logo.svg.png';
import RestApiLogo from '../../Assets/rest_api.png';
import gitLogo from '../../Assets/Git_icon.svg.png';
import figmaLogo from '../../Assets/figma-1.svg';
import googleLogo from '../../Assets/google_icon.png';

const MyTechsSkills: FC = () => {
  return (
    <section className='my-techs-skills component-setting'>
      <h2 className='my-techs-skills__heading component-heading'>My techs skills</h2>
      <ul className='my-techs-skills__list'>
        <li className='my-techs-skills__list-item'>
          <div className='my-techs-skills__item-container'>
            <p className='my-techs-skills__list-text'>- Html</p>
            <img src={htmlLogo} alt="html logo" className='my-techs-skills__item-img'/>
          </div>
        </li>
        <li className='my-techs-skills__list-item my-techs-skills__list-item_position_right'>
          <p className='my-techs-skills__list-text'>- Css</p>
          <img src={cssLogo} alt="css logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item'>
          <p className='my-techs-skills__list-text'>- JS</p>
          <img src={jsLogo} alt="js logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item my-techs-skills__list-item_position_right'>
          <p className='my-techs-skills__list-text'>- React</p>
          <img src={reactLogo} alt="react logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item'>
          <p className='my-techs-skills__list-text'>- Redux</p>
          <img src={reduxLogo} alt="redux logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item my-techs-skills__list-item_position_right'>
          <p className='my-techs-skills__list-text'>- Node.js(express)</p>
          <img src={nodeJsLogo} alt="nodeJs logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item'>
          <p className='my-techs-skills__list-text'>- MongoDB</p>
          <img src={MongoDbLogo} alt="MongoDb logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item my-techs-skills__list-item_position_right'>
          <p className='my-techs-skills__list-text'>- REST Api</p>
          <img src={RestApiLogo} alt="RestApi logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item'>
          <p className='my-techs-skills__list-text'>- BEM layout</p>
        </li>
        <li className='my-techs-skills__list-item my-techs-skills__list-item_position_right'>
          <p className='my-techs-skills__list-text'>- Git</p>
          <img src={gitLogo} alt="Git logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item'>
          <p className='my-techs-skills__list-text'>- Figma</p>
          <img src={figmaLogo} alt="Figma logo" className='my-techs-skills__item-img'/>
        </li>
        <li className='my-techs-skills__list-item my-techs-skills__list-item_position_right'>
          <p className='my-techs-skills__list-text'>- I can google =)</p>
          <img src={googleLogo} alt="google logo" className='my-techs-skills__item-img'/>
        </li>
      </ul>
    </section>
  )
}

export default MyTechsSkills