import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const btechSubjects = {
    cse: {
        1: [
            "Applied Chemistry",
            "Applied Physics-I",
            "Fundamentals of Computing",
            "Manufacturing Processes",
            "Applied Mathematics-I",
            "Electrical Technology",
            "Human Values and Professional Ethics-I",
        ],
        2: [
            "Applied Physics-II",
            "Communication Skills",
            "Environmental Studies",
            "Applied Mathematics-II",
            "Electronic Devices",
            "Introduction to Programming",
            "Engineering Mechanics",
        ],
        3: [
            "Data Structures",
            "Discrete Mathematics",
            "Object‐Oriented Programming using C++",
            "Computational Methods",
            "Digital Logic and Computer Design",
        ],
        4: [
            "Theory of Computation",
            "Database Management Systems",
            "Programming in Java",
            "Probability, Statistics and Linear Programming",
            "Circuits and Systems",
        ],
        5: [
            "Operating Systems",
            "Computer Networks",
            "Software Engineering",
            "Economics for Engineers",
            "Compiler Design",
            "Design and Analysis of Algorithm",
        ],
        6: ["Principles of Management for Engineers", "Universal Human Values"],
        7: ["Principles of Entrepreneurship Mindset"],
        8: ["Focus on grabbing an internship and making a major project report"],
    },
};

const BTechChapterPage = () => {
    const { semNumber, branchName } = useParams();
    const navigate = useNavigate();
    const sem = parseInt(semNumber);
    const lowerBranch = branchName.toLowerCase();
    const subjects = btechSubjects[lowerBranch]?.[sem] || [];

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
        <div className="min-h-[70vh] max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-white">
                {branchName.toUpperCase()} - Semester {sem}
            </h2>

            {lowerBranch !== "cse" ? (
                <p className="text-center text-gray-300 mt-10 text-2xl font-semibold">
                    📚 Notes will be uploaded soon for {branchName.toUpperCase()} - Semester {sem}.
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
                                className="bg-[#0f172a] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center text-white"
                            >
                                <h3 className="text-lg font-semibold mb-4">{subject}</h3>

                                {sem !== 8 ? (
                                    note ? (
                                        <a
                                            href={note.file}
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                                        >
                                            Download Notes
                                        </a>
                                    ) : (
                                        <button
                                            className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                                            onClick={() => navigate("/note-missing")}
                                        >
                                            Notes will be added soon
                                        </button>
                                    )
                                ) : (
                                    <p className="text-sm text-gray-400">Project & Internship Semester</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BTechChapterPage;
