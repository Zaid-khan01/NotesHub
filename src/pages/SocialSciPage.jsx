// src/pages/SocialSciPage.jsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const socialSubjects = ["History", "Geography", "Civics", "Economics"];

const SocialSciPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();

  const handleClick = (subject) => {
    navigate(`/class/${classId}/subject/social-science/${subject.toLowerCase()}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Social Science Subjects</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {socialSubjects.map((subject) => (
          <div
            key={subject}
            onClick={() => handleClick(subject)}
            className="cursor-pointer bg-[#111827] text-center p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-700"
          >
            <h3 className="text-md sm:text-lg font-semibold text-white">
              {subject}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialSciPage;
