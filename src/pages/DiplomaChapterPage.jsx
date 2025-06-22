import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const diplomaSubjects = {
  1: [
    "Applied Physics",
    "Applied Chemistry",
    "Communication Skills",
    "Engineering Drawing",
    "Basic Electronics Engineering",
  ],
  2: [
    "C Programming",
    "Digital Electronics",
    "Computer Fundamentals",
    "Engineering Mathematics",
    "Environmental Studies",
    "Multimedia and Applications",
  ],
  3: [
    "Data Structures and Algorithms (DSA)",
    "Operating Systems",
    "Database Management System (DBMS)",
    "Computer Architecture",
    "Web Development Basics",
  ],
  4: [
    "Object Oriented Programming (OOPs)",
    "Computer Networks",
    "Software Engineering",
    "JavaScript and DOM",
    "Advanced DBMS",
  ],
  5: [
    "Java Programming",
    "Python Programming",
    "Cyber Security Essentials",
    "Cloud Computing Basics",
  ],
  6: ["Internet of Things (IoT)", "Machine Learning Basics"],
};

const DiplomaChapterPage = () => {
  const { semNumber, branchName } = useParams();
  const navigate = useNavigate();
  const lowerBranch = branchName?.toLowerCase();
  const subjects = diplomaSubjects[semNumber] || [];

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
        Diploma {lowerBranch?.toUpperCase()} - Semester {semNumber}
      </h2>

      {lowerBranch !== "cse" ? (
        <p className="text-center text-gray-300 mt-10 text-2xl font-semibold">
          📚 Notes for this branch will be added soon.
        </p>

      ) : subjects.length === 0 ? (
        <p className="text-center text-gray-400">No subjects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const note = notes.find((n) =>
              n.title.toLowerCase().includes(subject.toLowerCase())
            );

            return (
              <div
                key={index}
                className="bg-[#0f172a] text-white rounded-xl p-6 shadow hover:shadow-lg hover:bg-[#1e293b] transition"
              >
                <h3 className="text-lg font-semibold mb-4 text-center">
                  {subject}
                </h3>
                <div className="flex justify-center">
                  {note ? (
                    <a
                      href={note.file}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition text-sm"
                    >
                      Download Notes
                    </a>
                  ) : (
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition text-sm"
                      onClick={() => navigate("/note-missing")}
                    >
                      Notes will be added soon
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DiplomaChapterPage;
