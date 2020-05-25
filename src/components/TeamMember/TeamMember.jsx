import React from 'react';
import './TeamMember.scss';

const TeamMember = ({ name, position, city, email, image, openSlider }) => {
  return (
    <div className="team-member">
      {email && (
        <a href={`mailto:${email}`} className="team-member__mail">
          <div className="team-member__mail-content" />
        </a>
      )}
      <div className="team-member__image-wrapper" onClick={openSlider}>
        <img
          src={image}
          className="team-member__img"
          alt={name}
        />
      </div>
      <div className="team-member__name">
        {name}
      </div>
      <div className="team-member__position">
        {position}
      </div>
      <div className="team-member__city">
        {city}
      </div>
    </div>
  );
}

export default TeamMember;
