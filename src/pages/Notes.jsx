import React from "react";
import ClassCard from "../components/ClassCard";

const classOptions = [
  { name: "10th", icon: "📗" },
  { name: "11th", icon: "📘" },
  { name: "12th", icon: "📙" },
  { name: "BCA", icon: "💻" },
  { name: "Diploma", icon: "📐" },
  { name: "BTech", icon: "🧠" },
];

const Notes = () => {
  return (
    <section
      id="notes"
      className="pt-32 pb-20 px-6 md:px-16 lg:px-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Choose Your Class or Degree
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 justify-items-center px-2 sm:px-0">



        {classOptions.map((item) => (
          <ClassCard key={item.name} name={item.name} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default Notes;
