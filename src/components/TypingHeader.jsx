import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingHeader = () => {
  return (
    <div className="text-left text-2xl sm:text-3xl font-bold mb-4 whitespace-nowrap overflow-hidden">
      <span className="text-white">Notes Available for </span>
      <span className="text-purple-400">
        <Typewriter
          words={['10th Class', '11th Class', '12th Class', 'BCA', 'Diploma', 'BTech']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
};

export default TypingHeader;
