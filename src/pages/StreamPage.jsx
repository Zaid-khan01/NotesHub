import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const streams = ["Science", "Commerce", "Arts"];

const StreamPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();

  const handleStreamClick = (stream) => {
    navigate(`/class/${classId}/stream/${stream.toLowerCase()}`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
        Select Stream for Class {classId}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {streams.map((stream) => (
          <div
            key={stream}
            onClick={() => handleStreamClick(stream)}
            className="cursor-pointer bg-[#0f172a] text-white text-center p-6 rounded-xl shadow hover:shadow-lg hover:bg-[#1e293b] transition"
          >
            <h3 className="text-xl font-semibold">{stream}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamPage;
