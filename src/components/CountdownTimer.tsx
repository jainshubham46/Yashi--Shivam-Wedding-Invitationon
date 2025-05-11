import React from 'react';
import useCountdown from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds, isOver } = useCountdown(targetDate);

  const timeBlocks = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds }
  ];

  if (isOver) {
    return (
      <div className="text-white text-2xl font-light">
        The wedding celebration has begun!
      </div>
    );
  }

  return (
    <div className="flex justify-center space-x-2 md:space-x-4">
      {timeBlocks.map(({ label, value }) => (
        <div 
          key={label}
          className="flex flex-col items-center"
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center mb-2 border border-white border-opacity-30 shadow-lg">
            <span className="text-white text-2xl md:text-4xl font-semibold">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white text-xs md:text-sm font-light uppercase tracking-wide">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;