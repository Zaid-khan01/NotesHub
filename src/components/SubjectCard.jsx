import React from "react";

const SubjectCard = ({ name }) => {
  const handleClick = () => {
    // optional: future detail page or file list can be added
    alert(`Open notes for ${name}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg text-center transition"
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white capitalize">
        {name}
      </h3>
    </div>
  );
};

export default SubjectCard;
