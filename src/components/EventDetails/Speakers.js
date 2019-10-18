import React from 'react';

import infos from './data/infos';


const Speakers = () => {
  return (
    <div className="speakers">
      <h1>Intervenants</h1>
      { infos.map((speaker) => {
      const unknownUser = speaker.avatar === "" ? "src/assets/images/user.png"  : speaker.avatar;
        return (
          <div className="speakers-card" key={speaker.id}>
            <img className="speakers-img" src={unknownUser} alt="avatar"/>
            <div className="speakers-content">
              <h4>{speaker.name}</h4>
              <p>{speaker.role}</p>
              <p>{speaker.company}</p>
            </div>
          </div>
        )
      })}
      {/* <a href="#">Afficher plus</a> */}
    </div>
  );
};

export default Speakers;