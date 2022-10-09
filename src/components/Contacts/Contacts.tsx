import './Contacts.css';
import React, { FC } from 'react';
import tgLogo from '../../Assets/Telegram_logo.svg';

const Contacts: FC = () => {
  return (
    <section className='contacts component-setting'>
      <h2 className='contacts__heading component-heading'>Contacts</h2>
      <p className='contacts__description'>
        Write me here
      </p>
      <ul className='contacts__links-list'>
        <li className='contacts__link-item'>
          <img className='contacts__logo' src={tgLogo} alt='tgLogo'/> 
          <a className='contacts__description contacts__link' href='https://t.me/Scal3' target='_blank' rel='noreferrer'>Telegram</a>
        </li>
      </ul>
    </section>
  )
}

export default Contacts