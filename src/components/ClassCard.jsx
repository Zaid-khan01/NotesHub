import React from "react";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ name, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const lower = name.toLowerCase();

    if (lower === "11th" || lower === "12th") {
      navigate(`/class/${lower}/stream`);
    } else if (lower === "btech" || lower === "diploma") {
      navigate(`/class/${lower}/branch`);
    } else {
      // 10th or bca
      navigate(`/class/${lower}`);
    }
  };

  return (
    <div
  onClick={handleClick}
  className="cursor-pointer w-full sm:w-64 h-36 sm:h-44 bg-gray-900 text-white rounded-2xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 border border-white"
>
  <div className="text-3xl sm:text-5xl mb-1">{icon}</div>
  <h3 className="text-base sm:text-xl font-semibold text-center">{name}</h3>
</div>


  );
};

export default ClassCard;
