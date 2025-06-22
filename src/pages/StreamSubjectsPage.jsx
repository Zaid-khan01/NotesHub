import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const streamSubjects = {
  "11": {
    science: ["Physics", "Chemistry", "Maths", "Biology", "English"],
    commerce: ["Accountancy", "Business Studies", "Economics", "English", "Maths"],
    arts: ["History", "Geography", "Political Science", "English", "Sociology"],
  },
  "12": {
    science: ["Physics", "Chemistry", "Maths", "Biology", "English"],
    commerce: ["Accountancy", "Business Studies", "Economics", "English", "Maths"],
    arts: ["History", "Geography", "Political Science", "English", "Sociology"],
  },
};

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const normalizeClassId = (id) => {
  if (id === "11th") return "11";
  if (id === "12th") return "12";
  return id;
};

const StreamSubjectsPage = () => {
  const { classId, streamName } = useParams();
  const navigate = useNavigate();

  const normalizedClassId = normalizeClassId(classId);
  const subjects = streamSubjects[normalizedClassId]?.[streamName.toLowerCase()] || [];

  const handleSubjectClick = (subject) => {
    navigate(`/class/${classId}/stream/${streamName}/subject/${subject.toLowerCase()}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-500 dark:text-blue-400">
        {`Class ${capitalize(classId)} - ${capitalize(streamName)} Stream Subjects`}
      </h2>

      {subjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject}
              onClick={() => handleSubjectClick(subject)}
              className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center p-6 rounded-lg shadow hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold">{subject}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300">No subjects found for this stream.</p>
      )}
    </div>
  );
};

export default StreamSubjectsPage;
