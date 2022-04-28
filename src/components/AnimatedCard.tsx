import React from 'react';

function AnimatedCard({ animation, digit }: { animation: any; digit: any }) {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
}

export default AnimatedCard;
