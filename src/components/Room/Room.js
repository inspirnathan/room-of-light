import React, { useState } from 'react';
import './Room.scss';
import roomLight from '../../assets/room.png';
import roomDark from '../../assets/room_night.png';

const Room = () => {
  const [light, setLight] = useState(false);

  window.addEventListener(
    'lightChange',
    e => {
      setLight(e.detail.light);
    },
    false
  );

  return (
    <div className="Room">
      <img
        className="roomImg"
        src={light ? roomLight : roomDark}
        alt={light ? 'light room' : 'dark room'}
      />
    </div>
  );
};

export default Room;
