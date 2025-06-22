import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const chaptersData = {
  "10": {
    maths: [
      "Chapter 1 - Real Numbers",
      "Chapter 2 - Polynomials",
      "Chapter 3 - Pair Of Linear Equations In Two Variables",
      "Chapter 4 - Quadratic Equations",
      "Chapter 5 - Arithmetic Progressions",
      "Chapter 6 - Triangles",
      "Chapter 7 - Coordinate Geometry",
      "Chapter 8 - Introduction To Trigonometry",
      "Chapter 9 - Some Applications of Trigonometry",
      "Chapter 10 - Circles",
      "Chapter 11 - Areas Related to Circles",
      "Chapter 12 - Surface Area and Volume",
      "Chapter 13 - Statistics",
      "Chapter 14 - Probability",
    ],
    science: [
      "Chapter 1 - Chemical Reactions and Equations",
      "Chapter 2 - Acids, Bases and Salts",
      "Chapter 3 - Metals and Non-Metals",
      "Chapter 4 - Carbon and Its Compounds",
      "Chapter 5 - Life Processes",
      "Chapter 6 - Control and Coordination",
      "Chapter 7 - How do Organisms Reproduce?",
      "Chapter 8 - Heredity and Evolution",
      "Chapter 9 - Light - Reflection and Refraction",
      "Chapter 10 - The Human Eye and the Colourful World",
      "Chapter 11 - Electricity",
      "Chapter 12 - Magnetic Effects of Electric Current",
      "Chapter 13 - Our Environment",
    ],
    english: [
      "Chapter 1 - A Letter to God",
      "Chapter 2 - Nelson Mandela – Long Walk to Freedom",
      "Chapter 3 - Two Stories About Flying",
      "Chapter 4 - From the Diary of Anne Frank",
      "Chapter 5 - Glimpses of India",
      "Chapter 6 - Mijbil the Otter",
      "Chapter 7 - Madam Rides the Bus",
      "Chapter 8 - The Sermon at Benares",
      "Chapter 9 - The Proposal (Play)",
      "Chapter 10 - Dust of Snow",
      "Chapter 11 - Fire and Ice",
      "Chapter 12 - A Tiger in the Zoo",
      "Chapter 13 - How to Tell Wild Animals",
      "Chapter 14 - The Ball Poem",
      "Chapter 15 - Amanda!",
      "Chapter 16 - The Trees",
      "Chapter 17 - Fog",
      "Chapter 18 - The Tale of Custard the Dragon",
      "Chapter 19 - For Anne Gregory",
      "Chapter 20 - A Triumph of Surgery",
      "Chapter 21 - The Thief’s Story",
      "Chapter 22 - The Midnight Visitor",
      "Chapter 23 - A Question of Trust",
      "Chapter 24 - Footprints Without Feet",
      "Chapter 25 - The Making of a Scientist",
      "Chapter 26 - The Necklace",
      "Chapter 27 - Bholi",
      "Chapter 28 - The Book That Saved the Earth",
    ],
    hindi: [
      "Chapter 1 - Sakhi (Kabir)",
      "Chapter 2 - Meera ke Pad (Rahim)",
      "Chapter 3 - Biharidas ke Dohe (Tulsidas)",
      "Chapter 4 - Manushyata (Makkhanlal Chaturvedi)",
      "Chapter 5 - Parvat Pradesh Mein Paavas (Sumitranandan Pant)",
      "Chapter 6 - Madhur Madhur Mere Deepak Jal (Nirala)",
      "Chapter 7 - Bade Bhai Sahib (Premchand)",
      "Chapter 8 - Tottodrama (Vishnu Prabhakar)",
      "Chapter 9 - Diary Ka Ek Panna (Siyaramsharan Gupta)",
      "Chapter 10 - Tisri Kasam ke Shilpkar: Shailendra (Kanhaiyalal Mishra Prabhakar)",
      "Chapter 11 - Ab Kya Karu (Harishankar Parsai)",
      "Chapter 12 - Mata ka Aanchal (Shivpujan Sahay)",
      "Chapter 13 - George Pancham ki Naak (Krishna Chander)",
      "Chapter 14 - Sana Sana Hath Jodi (Manu Bhandari)",
      "Chapter 15 - Topi Shukla (Rahi Masoom Raza)",
      "Chapter 16 - Mein Kyon Likhata Hoon (Atal Bihari Vajpayee)",
    ]
  },
  "11": {
    physics11: [
      "Chapter 1 - Units and Measurement",
      "Chapter 2 - Motion in a Straight Line",
      "Chapter 3 - Motion in a Plane",
      "Chapter 4 - Law of Motion",
      "Chapter 5 - Work Energy and Power",
      "Chapter 6 - Systems of Particles and Rotational Motion",
      "Chapter 7 - Gravitation",
      "Chapter 8 - Mechanical Properties of Solids",
      "Chapter 9 - Mechanical Properties of Fluids",
      "Chapter 10 - Thermal Properties of Matter",
      "Chapter 11 - Thermodynamics",
      "Chapter 12 - Kinetic Theory",
      "Chapter 13 - Oscillations",
      "Chapter 14 - Waves",
    ],
    chemistry11: [
      "Chapter 1 - Some Basic Concepts of Chemistry",
      "Chapter 2 - Structure of Atom",
      "Chapter 3 - Classification of Elements and Periodicity",
      "Chapter 4 - Chemical Bonding and Molecular Structure",
      "Chapter 5 - States of Matter",
      "Chapter 6 - Thermodynamics",
      "Chapter 7 - Equilibrium",
      "Chapter 8 - Redox Reactions",
      "Chapter 9 - Hydrogen",
      "Chapter 10 - The s-Block Element",
      "Chapter 11 - The p-Block Element",
      "Chapter 12 - Organic Chemistry - Some Basic Principles and Techniques",
      "Chapter 13 - Hydrocarbons",
      "Chapter 14 - Environmental Chemistry",
    ],
    maths11: [
      "Chapter 1 - Sets",
      "Chapter 2 - Relations and Functions",
      "Chapter 3 - Trigonometric Functions",
      "Chapter 4 - Principle of Mathematical Induction",
      "Chapter 5 - Complex Numbers and Quadratic Equations",
      "Chapter 6 - Linear Inequalities",
      "Chapter 7 - Permutations and Combinations",
      "Chapter 8 - Binomial Theorem",
      "Chapter 9 - Sequences and Series",
      "Chapter 10 - Straight Lines",
      "Chapter 11 - Conic Sections",
      "Chapter 12 - Introduction to Three Dimensional Geometry",
      "Chapter 13 - Limits and Derivatives",
      "Chapter 14 - Mathematical Reasoning",
      "Chapter 15 - Statistics",
      "Chapter 16 - Probability",
    ],
    biology11: [
      "Chapter 1 - The Living World",
      "Chapter 2 - Biological Classification",
      "Chapter 3 - Plant Kingdom",
      "Chapter 4 - Animal Kingdom",
      "Chapter 5 - Morphology of Flowering Plants",
      "Chapter 6 - Anatomy of Flowering Plants",
      "Chapter 7 - Structural Organisation in Animals",
      "Chapter 8 - Cell - The Unit of Life",
      "Chapter 9 - Biomolecules",
      "Chapter 10 - Cell Cycle and Cell Division",
      "Chapter 11 - Transport in Plants",
      "Chapter 12 - Mineral Nutrition",
      "Chapter 13 - Photosynthesis in Higher Plants",
      "Chapter 14 - Respiration in Plants",
      "Chapter 15 - Plant Growth and Development",
      "Chapter 16 - Digestion and Absorption",
      "Chapter 17 - Breathing and Exchange of Gases",
      "Chapter 18 - Body Fluids and Circulation",
      "Chapter 19 - Excretory Products and Their Elimination",
      "Chapter 20 - Locomotion and Movement",
      "Chapter 21 - Neural Control and Coordination",
      "Chapter 22 - Chemical Coordination and Integration",
    ],
    english11: [
      "Chapter 1 - The Portrait of a Lady",
      "Chapter 2 - We’re Not Afraid to Die… if We Can All Be Together",
      "Chapter 3 - Discovering Tut: the Saga Continues",
      "Chapter 4 - Landscape of the Soul",
      "Chapter 5 - The Ailing Planet: the Green Movement’s Role",
      "Chapter 6 - The Browning Version",
      "Chapter 7 - The Adventure",
      "Chapter 8 - Silk Road",
      "Chapter 9 - A Photograph",
      "Chapter 10 - The Laburnum Top",
      "Chapter 11 - The Voice of the Rain",
      "Chapter 12 - Childhood",
      "Chapter 13 - Father to Son",
      "Chapter 14 - The Summer of the Beautiful White Horse",
      "Chapter 15 - The Address",
      "Chapter 16 - Ranga’s Marriage",
      "Chapter 17 - Albert Einstein at School",
      "Chapter 18 - Mother’s Day",
      "Chapter 19 - The Ghat of the Only World",
      "Chapter 20 - Birth",
      "Chapter 21 - The Tale of Melon City",
    ],
  },
  "12": {
    physics12: [
      "Chapter 1 - Electric Charges and Fields",
      "Chapter 2 - Electrostatic Potential and Capacitance",
      "Chapter 3 - Current Electricity",
      "Chapter 4 - Moving Charges and Magnetism",
      "Chapter 5 - Magnetism and Matter",
      "Chapter 6 - Electromagnetic Induction",
      "Chapter 7 - Alternating Current",
      "Chapter 8 - Electromagnetic Waves",
      "Chapter 9 - Ray Optics and Optical Instruments",
      "Chapter 10 - Wave Optics",
      "Chapter 11 - Dual Nature of Radiation and Matter",
      "Chapter 12 - Atoms",
      "Chapter 13 - Nuclei",
      "Chapter 14 - Semiconductor Electronics",
    ],
    chemistry12: [
      "Chapter 1 - Solutions",
      "Chapter 2 - Electrochemistry",
      "Chapter 3 - Chemical Kinetics",
      "Chapter 4 - The d- and f-Block Elements",
      "Chapter 5 - Coordination Compounds",
      "Chapter 6 - Haloalkanes and Haloarenes",
      "Chapter 7 - Alcohols, Phenols and Ethers",
      "Chapter 8 - Aldehydes, Ketones and Carboxylic Acids",
      "Chapter 9 - Amines",
      "Chapter 10 - Biomolecules",
    ],
    maths12: [
      "Chapter 1 - Relations and Functions",
      "Chapter 2 - Inverse Trigonometric Functions",
      "Chapter 3 - Matrices",
      "Chapter 4 - Determinants",
      "Chapter 5 - Continuity and Differentiability",
      "Chapter 6 - Application of Derivatives",
      "Chapter 7 - Integrals",
      "Chapter 8 - Application of Integrals",
      "Chapter 9 - Differential Equations",
      "Chapter 10 - Vector Algebra",
      "Chapter 11 - Three Dimensional Geometry",
      "Chapter 12 - Linear Programming",
      "Chapter 13 - Probability",
    ],
    biology12: [
      "Chapter 1 - Sexual Reproduction in Flowering Plants",
      "Chapter 2 - Human Reproduction",
      "Chapter 3 - Reproductive Health",
      "Chapter 4 - Principles of Inheritance and Variation",
      "Chapter 5 - Molecular Basis of Inheritance",
      "Chapter 6 - Evolution",
      "Chapter 7 - Human Health and Disease",
      "Chapter 8 - Microbes in Human Welfare",
      "Chapter 9 - Biotechnology: Principles and Processes",
      "Chapter 10 - Biotechnology and Its Applications",
      "Chapter 11 - Organisms and Populations",
      "Chapter 12 - Ecosystem",
      "Chapter 13 - Biodiversity and Conservation",
    ],
    english12: [
      "Chapter 1 - The Last Lesson",
      "Chapter 2 - Lost Spring",
      "Chapter 3 - Deep Water",
      "Chapter 4 - The Rattrap",
      "Chapter 5 - Indigo",
      "Chapter 6 - Poets and Pancakes",
      "Chapter 7 - The Interview",
      "Chapter 8 - Going Places",
      "Chapter 9 - My Mother at Sixty-Six",
      "Chapter 10 - An Elementary School Classroom in a Slum",
      "Chapter 11 - Keeping Quiet",
      "Chapter 12 - A Thing of Beauty",
      "Chapter 13 - A Roadside Stand",
      "Chapter 14 - Aunt Jennifer’s Tigers",
      "Chapter 15 - The Third Level",
      "Chapter 16 - The Tiger King",
      "Chapter 17 - Journey to the End of the Earth",
      "Chapter 18 - The Enemy",
      "Chapter 19 - On the Face of It",
      "Chapter 20 - Memories of Childhood",
    ],
  }

};

const subjectMap = {
  // ✅ Subject ID mapping (keep as is)
  maths: 5,
  science: 1,
  english: 4,
  hindi: 9,

  physics11: 11,
  chemistry11: 13,
  biology11: 15,
  english11: 12,
  maths11: 14,

  physics12: 16,
  chemistry12: 18,
  biology12: 19,
  english12: 20,
  maths12: 17,
};

const SubjectPage = () => {
  const { classId, subjectId } = useParams();
  const rawSubjectKey = subjectId?.toLowerCase();

  let subjectKey = rawSubjectKey;
  if (classId === "11th") subjectKey = `${rawSubjectKey}11`;
  if (classId === "12th") subjectKey = `${rawSubjectKey}12`;

  const normalizedClassId =
    classId === "11th" ? "11" : classId === "12th" ? "12" : classId;

  const chapters = chaptersData[normalizedClassId]?.[subjectKey] || [];
  const backendSubjectId = subjectMap[subjectKey] || null;

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

  if (rawSubjectKey === "social-science") return null;

  if (loading) {
    return (
      <div className="text-center text-gray-300 py-20 text-lg">
        Loading notes...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 capitalize">
        {subjectId} Chapters
      </h1>

      {!backendSubjectId ? (
        <p className="text-center text-gray-300 mt-10 text-2xl font-semibold">
          📚 Notes for this subject will be added soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => {
            const chapterNum = index + 1;

            const matchedNote = notes.find(
              (note) =>
                note.subject === backendSubjectId &&
                new RegExp(`chapter\\s*0*${chapterNum}\\b`, "i").test(
                  note.title.toLowerCase()
                )
            );

            return (
              <div
                key={index}
                className="bg-[#0f172a] text-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-[#1e293b] transition"
              >
                <h2 className="text-lg font-semibold mb-4">{chapter}</h2>

                {matchedNote ? (
                  <a
                    href={matchedNote.file}
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
                    onClick={() => (window.location.href = "/note-missing")}
                  >
                    Notes will be added soon
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubjectPage;