import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const semestersMap = {
  bca: 6,
  diploma: 6,
  btech: 8,
};

const subjectsMap = {
  "10": ["Maths", "Science", "English", "Social Science", "Hindi"],
  "12": ["Physics", "Chemistry", "Maths", "Biology", "English"],
};

const ClassPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();

  const normalizedId = classId.replace("th", "").toLowerCase();
  const isDegree = ["bca", "btech", "diploma"].includes(normalizedId);

  const handleClick = (value) => {
    if (isDegree) {
      navigate(`/class/${normalizedId}/semester/${value}`);
    } else {
      if (value.toLowerCase() === "social science") {
        navigate(`/class/${normalizedId}/subject/social-science`);
      } else {
        navigate(`/class/${normalizedId}/subject/${value.toLowerCase()}/chapter`);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 capitalize text-blue-600 dark:text-blue-400">
        {isDegree
          ? `${normalizedId.toUpperCase()} Semesters`
          : `Class ${normalizedId} Subjects`}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {isDegree
          ? Array.from({ length: semestersMap[normalizedId] }, (_, i) => (
              <div
                key={i}
                onClick={() => handleClick(i + 1)}
                className={`cursor-pointer text-center p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 text-white ${
                  ["bca", "diploma"].includes(normalizedId)
                    ? "bg-gradient-to-br from-indigo-700 to-purple-700 hover:from-indigo-600 hover:to-purple-600"
                    : "bg-[#111827] border border-gray-700"
                }`}
              >
                <h3 className="text-md sm:text-lg font-semibold">
                  Semester {i + 1}
                </h3>
              </div>
            ))
          : subjectsMap[normalizedId]?.map((subject) => (
              <div
                key={subject}
                onClick={() => handleClick(subject)}
                className="cursor-pointer bg-[#111827] text-center p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 border border-gray-700"
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

export default ClassPage;
