import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SemesterCard = ({ number }) => {
  const navigate = useNavigate();
  const { classId } = useParams(); // ✅ fixed here

  const handleClick = () => {
    navigate(`/class/${classId}/semester/${number}`); // ✅ fixed here
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-[#0f172a] text-white text-center p-6 rounded-xl shadow hover:shadow-lg hover:bg-[#1e293b] transition w-full"
    >
      <div className="text-xl font-semibold">Semester {number}</div>
    </div>
  );
};

export default SemesterCard;
