import './CurrentWork.css';
import React, { FC } from 'react';

const CurrentWork: FC = () => {
  return (
    <section className='current-work component-setting'>
      <h2 className='current-work__heading component-heading'>My current job</h2>
      <p className='current-work__description'>
        I'm working remotely in Moscow. My organization is 'ООО ЧИПТЮН'. I'm a web-developer, working with frontend and backend parts of application.
      </p>
    </section>
  )
}

export default CurrentWork