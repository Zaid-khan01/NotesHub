import React, { useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const branchOptions = {
  btech: [
    { code: "CSE", name: "Computer Science" },
    { code: "ECE", name: "Electronics & Communication" },
    { code: "EEE", name: "Electrical & Electronics" },
    { code: "ME", name: "Mechanical Engineering" },
    { code: "IT", name: "Information Technology" },
    { code: "CE", name: "Civil Engineering" },
  ],
  diploma: [
    { code: "CSE", name: "Computer Science" },
    { code: "ECE", name: "Electronics & Communication" },
    { code: "EEE", name: "Electrical & Electronics" },
    { code: "ME", name: "Mechanical Engineering" },
    { code: "IT", name: "Information Technology" },
    { code: "CE", name: "Civil Engineering" },
  ],
};

const BranchPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const lowerClass = classId.toLowerCase();

  const branches = branchOptions[lowerClass] || [];

  // ✅ Instantly scroll to top without animation before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (branchCode) => {
    navigate(`/class/${classId}/branch/${branchCode}/semester`);
  };

  return (
    <div className="min-h-[70vh] max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Select Your Branch
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {branches.map((branch) => (
          <div
            key={branch.code}
            onClick={() => handleClick(branch.code)}
            className="cursor-pointer w-40 bg-[#0f172a] text-white border border-white p-6 rounded-xl text-center shadow transition duration-300 hover:bg-[#1e293b] hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold">{branch.code}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchPage;
