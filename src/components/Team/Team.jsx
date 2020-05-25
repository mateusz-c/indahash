import React from 'react';
import './Team.scss';
import { teamMembers } from './consts';
import TeamMember from "../TeamMember/TeamMember";

const Team = () => {
  return (
    <div className="team">
      {teamMembers.map((member) => (
        <TeamMember {...member} />
      ))}
    </div>
  );
}

export default Team;
