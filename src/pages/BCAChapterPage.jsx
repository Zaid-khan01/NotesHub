import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const bcaSubjects = {
  1: ["Business Communication", "Principles of Management", "Computer Fundamentals", "Programming Principles & Algorithms", "Mathematics"],
  2: ["C Programming", "Discrete Mathematics", "Digital Electronics", "Organizational Behavior", "Financial Accounting"],
  3: ["Data Structures", "Database Management System", "Object-Oriented Programming using C++", "Operating Systems", "Computer Networks"],
  4: ["Java Programming", "Software Engineering", "Computer Architecture", "Web Technologies", "Numerical Methods"],
  5: ["Python Programming", "Cyber Security", "Mobile Application Development", "Data Analytics", "Cloud Computing"],
  6: ["Machine Learning", "Artificial Intelligence"]
};

const BCAChapterPage = () => {
  const { semNumber } = useParams();
  const navigate = useNavigate();
  const subjects = bcaSubjects[semNumber] || [];

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://web-production-ad5d.up.railway.app/api/notes/")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch notes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-300 py-20 text-lg">
        Loading notes...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        BCA - Semester {semNumber}
      </h2>

      {subjects.length === 0 ? (
        <p className="text-center text-gray-400">No subjects found for this semester.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const note = notes.find((n) =>
              n.title.toLowerCase().includes(subject.toLowerCase())
            );

            return (
              <div
                key={index}
                className="bg-[#0f172a] text-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-[#1e293b] transition"
              >
                <h3 className="text-lg font-semibold text-center mb-4">{subject}</h3>
                {note ? (
                  <div className="flex justify-center">
                    <a
                      href={note.file}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Download Notes
                    </a>
                  </div>

                ) : (
                  <div className="flex justify-center">
                    <button
                      onClick={() => navigate("/note-missing")}
                      className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Notes will be added soon
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BCAChapterPage;
