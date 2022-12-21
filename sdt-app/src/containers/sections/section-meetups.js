import React from 'react'
import img from '../../img/images/meetup.jpeg'
import '../../styles/containers/section-meetup.css'

const SectionMeetups = () => {
  return (
    <div className="meetup-container">
      <div className="meetup-title">Our meetups</div>
      <img src={img} className="meetup-img" alt="meetup" width={500} />
    </div>
  );
}

export default SectionMeetups