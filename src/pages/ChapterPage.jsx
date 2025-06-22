import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const chapterData = {
  "10": {
    maths: [
      "Chapter 1 - Real Numbers Solutions",
      "Chapter 2 - Polynomials Solutions",
      "Chapter 3 - Pair Of Linear Equations In Two Variables Solutions",
      "Chapter 4 - Quadratic Equations Solutions",
      "Chapter 5 - Arithmetic Progressions Solutions",
      "Chapter 6 - Triangles Solutions",
      "Chapter 7 - Coordinate Geometry Solutions",
      "Chapter 8 - Introduction To Trigonometry Solutions",
      "Chapter 9 - Some Applications of Trigonometry Solutions",
      "Chapter 10 - Circles Solutions",
      "Chapter 11 - Areas Related to Circles Solutions",
      "Chapter 12 - Surface Area and Volume Solutions",
      "Chapter 13 - Statistics Solutions",
      "Chapter 14 - Probability Solutions",
    ],
    science: [
      "Chapter 1 - Chemical Reactions and Equations Solutions",
      "Chapter 2 - Acids, Bases and Salts Solutions",
      "Chapter 3 - Metals and Non Metals Solutions",
      "Chapter 4 - Carbon and Its Compounds Solutions",
      "Chapter 5 - Life Processes Solutions",
      "Chapter 6 - Control And Coordination Solutions",
      "Chapter 7 - How do Organisms Reproduce Solutions",
      "Chapter 8 - Heredity and Evolution Solutions",
      "Chapter 9 - Light Reflection and Refraction Solutions",
      "Chapter 10 - The Human Eye and the Colourful World Solutions",
      "Chapter 11 - Electricity Solutions",
      "Chapter 12 - Magnetic Effects of Electric Current Solutions",
      "Chapter 13 - Our Environment Solutions",
    ],
    history: [
      "Chapter 1 - The Rise of Nationalism in Europe",
      "Chapter 2 - Nationalism in India",
      "Chapter 3 - The Making of a Global World",
      "Chapter 4 - The Age of Industrialisation",
      "Chapter 5 - Print Culture and the Modern World",
    ],
    geography: [
      "Chapter 1 - Resources and Development",
      "Chapter 2 - Forest and Wildlife Resources",
      "Chapter 3 - Water Resources",
      "Chapter 4 - Agriculture",
      "Chapter 5 - Minerals and Energy Resources",
      "Chapter 6 - Manufacturing Industries",
    ],
    economics: [
      "Chapter 1 - Development",
      "Chapter 2 - Sectors of the Indian Economy",
      "Chapter 3 - Money and Credit",
      "Chapter 4 - Globalisation and the Indian Economy",
    ],
    civics: [
      "Chapter 1 - Power Sharing",
      "Chapter 2 - Federalism",
      "Chapter 3 - Gender, Religion and Caste",
      "Chapter 4 - Political Parties",
      "Chapter 5 - Challenges to Democracy",
    ],
  },
};

// 🔑 Map subject keys to backend subject IDs
const subjectMap = {
  maths: 5,
  science: 1,
  english: 4,
  hindi: 9,

  history: 6,
  geography: 7,
  economics: 10,
  civics: 8,

};

const ChapterPage = () => {
  const { classId, subjectId } = useParams();
  const subjectKey = subjectId?.toLowerCase().replace(/\s+/g, "-");

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const chapters = chapterData[classId]?.[subjectKey] || [];
  const subjectBackendId = subjectMap[subjectKey];

  const capitalizedSubject =
    subjectId?.charAt(0).toUpperCase() + subjectId?.slice(1).toLowerCase();

  useEffect(() => {
    if (subjectBackendId) {
      fetch(`https://web-production-ad5d.up.railway.app/api/notes/?subject=${subjectBackendId}`)
        .then((res) => res.json())
        .then((data) => {
          setNotes(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching notes:", err);
          setLoading(false);
        });
    } else {
      setLoading(false); // No valid subject = don't stay in loading
    }
  }, [subjectBackendId]);

  if (loading) {
    return (
      <div className="text-center text-white py-20 text-lg">
        Loading notes...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        {chapters.length > 0
          ? `${capitalizedSubject} Chapters`
          : "Subject Not Found"}
      </h2>

      {chapters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chapters.map((chapter, index) => {
            const matchedNote = notes.find(
              (n) =>
                n.subject === subjectBackendId &&
                n.title.toLowerCase().includes(`chapter ${index + 1}`)
            );


            return (
              <div
                key={index}
                className="bg-[#1f1f2f] rounded-lg p-5 shadow flex justify-between items-center hover:bg-[#2a2a3d] transition"
              >
                <span className="text-white">{chapter}</span>
                {matchedNote ? (
                  <a
                    href={matchedNote.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded-md text-white"
                    download
                  >
                    Download
                  </a>
                ) : (
                  <button
                    onClick={() => (window.location.href = "/note-missing")}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded-md text-white"
                  >
                    Notes will be added soon
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-red-400 text-lg mt-6">
          📄 Chapters will be added soon or an invalid subject was selected.
        </p>
      )}
    </div>
  );
};

export default ChapterPage;
