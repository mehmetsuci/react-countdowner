import React, { useState } from 'react';
import Kronometer from '../../classes/Kronometer';
import KronometerWrapper from './KronometerWrapper';

const NEW_KRONOMETER = new Kronometer();

const {
  getSecond,
  setSecond,
  startKronometer,
  endKronometer,
  stopKronometer,
  resetKronometer,
  isTimerFinish,
  getFinishKronometerText
} = NEW_KRONOMETER;

const KronometerConteiner = () => {
  const [DOMSecond, setDOMSecond] = useState(0);
  
  setInterval(() => {
    if (isTimerFinish() && getSecond() <= 0) endKronometer();
    setDOMSecond(getSecond());
  }, 1000);

  return (
    <div className="kronometer-container">
      <KronometerWrapper
        setSecond={ setSecond }
        startKronometer={ startKronometer }
        stopKronometer={ stopKronometer }
        resetKronometer={ resetKronometer }
        DOMSecond={ DOMSecond }
        finishText={getFinishKronometerText()}
      />
    </div>
  );
};

export default KronometerConteiner;