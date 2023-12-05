import React from 'react';

const TeamCard = ({ teams }) => {
  return (
    <div>
      <div className='mx-auto xl:my-20 my-5 w-[90vw] flex flex-row flex-wrap justify-center xl:gap-10'>
        {teams.map((team) => (
          <div className='w-60 mb-5' key={team.id}>
            <img className='w-52 mx-auto' src={`/teams/${team.img}`} alt={team.name} />
            <div className='text-center'>
              <h3 className='font-medium mt-3'>{team.name}</h3>
              <p>{team.position}</p>
              <p>{team.phone}</p>
              <p>{team.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
