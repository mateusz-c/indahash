import React from 'react';
import './Team.scss';
import { teamMembers } from '../consts/team-members';
import TeamMember from "../TeamMember/TeamMember";

const Team = ({ openSlider }) => {
  return (
    <div className="team">
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          openSlider={() => openSlider(index)}
          {...member}
        />
      ))}
    </div>
  );
}

export default Team;
