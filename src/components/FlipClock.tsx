import React, { useEffect, useRef, useState } from 'react';
import FlipUnitContainer from './FlipUnitContainer';
import './FlipClock.css';

function FlipClock() {
  const [hours, setHours] = useState(0);
  const [hoursShuffle, setHoursShuffle] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [minutesShuffle, setMinutesShuffle] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [secondsShuffle, setSecondsShuffle] = useState(true);
  const timerIdRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    /**
     * 시간 업데이트
     */
    const updateTime = () => {
      //* 현재 시간 가져오기
      const time = new Date();
      const currentHours = time.getHours();
      const currentMinutes = time.getMinutes();
      const currentSeconds = time.getSeconds();

      // on hour chanage, update hours and shuffle state
      if (currentHours !== hours) {
        setHoursShuffle((prev) => !prev);
        setHours(currentHours);
      }

      // on minute chanage, update minutes and shuffle state
      if (currentMinutes !== minutes) {
        setMinutesShuffle((prev) => !prev);
        setMinutes(currentMinutes);
      }

      // on second chanage, update seconds and shuffle state
      if (currentSeconds !== seconds) {
        setSecondsShuffle((prev) => !prev);
        setSeconds(currentSeconds);
      }
    };

    timerIdRef.current = setInterval(() => updateTime(), 500);

    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
      }
    };
  }, [hours, minutes, seconds]);

  return (
    <div className={'flipClock'}>
      <FlipUnitContainer unit={'hours'} digit={hours} shuffle={hoursShuffle} />
      <FlipUnitContainer unit={'minutes'} digit={minutes} shuffle={minutesShuffle} />
      <FlipUnitContainer unit={'seconds'} digit={seconds} shuffle={secondsShuffle} />
    </div>
  );
}

export default FlipClock;
