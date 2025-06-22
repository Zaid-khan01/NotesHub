// src/pages/SemesterPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SemesterPage = () => {
  const { classId, semNumber, branchName } = useParams();
  const navigate = useNavigate();

  const classLower = classId.toLowerCase();
  const isBTech = classLower === "btech";
  const isBCA = classLower === "bca";
  const isDiploma = classLower === "diploma";

  const totalSemesters = isBTech ? 8 : 6;
  const showSemesterList = !semNumber || isNaN(parseInt(semNumber));

  const handleSemesterClick = (semNum) => {
    if (isBCA) {
      navigate(`/class/bca/semester/${semNum}`);
    } else if (isDiploma && branchName) {
      navigate(`/class/diploma/branch/${branchName}/semester/${semNum}`);
    } else if (isBTech && branchName) {
      navigate(`/class/btech/branch/${branchName}/semester/${semNum}`);
    } else {
      navigate(`/class/${classId}/semester/${semNum}`);
    }
  };

  return (
    <div className="min-h-[70vh] max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        {showSemesterList
          ? "Select Semester"
          : `${classId.toUpperCase()} - Semester ${semNumber}`}
      </h2>

      {showSemesterList ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(totalSemesters)].map((_, i) => (
            <div
              key={i}
              onClick={() => handleSemesterClick(i + 1)}
              className={`cursor-pointer rounded-xl p-6 shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl
                ${(isDiploma || isBCA || isBTech)
                  ? "bg-gradient-to-br from-indigo-700 to-purple-700 hover:from-indigo-600 hover:to-purple-600"
                  : "bg-[#0f172a] hover:bg-[#1e293b]"
                }`}
            >
              <h3 className="text-xl font-semibold text-center text-white">
                Semester {i + 1}
              </h3>
            </div>
          ))}
        </div>
      ) : isBCA || (isDiploma && !branchName) ? (
        <p className="text-center text-gray-400 mt-10">
          📚 Subjects are handled separately for {classId.toUpperCase()}.
        </p>
      ) : (
        <p className="text-center text-gray-400 mt-10">No subjects found.</p>
      )}
    </div>
  );
};

export default SemesterPage;
