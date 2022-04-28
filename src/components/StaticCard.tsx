import React from 'react';

function StaticCard({ position, digit }: { position: any; digit: any }) {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
}

export default StaticCard;
