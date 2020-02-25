import React, { useState, useEffect } from 'react';
import './LightSwitch.scss';
import classNames from 'classnames';

const LightSwitch = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    sendUpdate();
  });

  const handleClick = async () => {
    setLight(previousValue => !previousValue);
  };

  const sendUpdate = () => {
    window.dispatchEvent(new CustomEvent('lightChange', { detail: { light } }));
  };

  return (
    <div className="LightSwitch">
      <div
        aria-label="button"
        role="button"
        onClick={handleClick}
        className={classNames('switch', { 'switch--on': light })}
      >
        <i
          className={classNames('fa fa-lightbulb-o', {
            'fa-lightbulb-o--on': light
          })}
        ></i>
      </div>
    </div>
  );
};

export default LightSwitch;
