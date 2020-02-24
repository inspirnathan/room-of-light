import React, { useState } from 'react';
import './LightSwitch.scss';
import classNames from 'classnames';

const LightSwitch = () => {
  const [light, setLight] = useState(false);

  const handleClick = () => {
    setLight(!light);
  };

  return (
    <div className="LightSwitch">
      <div onClick={handleClick} className={classNames('switch', {'switch--on': light})}>
        <i className={classNames("fa fa-lightbulb-o", {'fa-lightbulb-o--on': light})}></i>
      </div>
    </div>
  );
};

export default LightSwitch;
