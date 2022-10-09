import './WorkExperience.css';
import React, { FC } from 'react';

const WorkExperience: FC = () => {
  return (
    <section className='work-experience component-setting'>
      <h2 className='work-experience__heading component-heading'>My work experience</h2>

      <div className='work-experience__work-box'>
        <h3 className='work-experience__job-heading'>My first job was a jewelry seller</h3>
        <p className='work-experience__duration work-experience__job-heading'>Duration: 3.5 months</p>
        <p className='work-experience__description'>
          I sold jewelry and helped people choose it. I also kept documentation and reporting.
          I acquired various qualities at work, for example, I easily talk to people and know something about jewelry &#128516;
          I quitted job because i was a replacement employee.
        </p>
      </div>

      <div className='work-experience__work-box'>
        <h3 className='work-experience__job-heading'>My second job was a warehouseman in Poland</h3>
        <p className='work-experience__duration work-experience__job-heading'>Duration: 5 months</p>
        <p className='work-experience__description'>
          So, what i can say... One time i went to work in Europe. I went to earn some money for an IT course.
          My job was hard. I loaded boxes to the gate from 2 AM to 6 AM, and after this from 6 AM to 8 AM i helped curiers.
          It was funny &#128516;
        </p>
      </div>

      <div className='work-experience__work-box'>
        <h3 className='work-experience__job-heading'>The yandex praktikum course</h3>
        <p className='work-experience__duration work-experience__job-heading'>Duration: 10 months</p>
        <p className='work-experience__description'>
          On the course i did seven projects. It was hard, funny and cool. I acquired an important quality - independence.
          And now at my current work i try my best to complete tasks by myself.
        </p>
      </div>
    </section>
  )
}

export default WorkExperience


