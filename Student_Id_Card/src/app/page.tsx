import React from "react";
import StudentCard from "./components/StudentCard";

const students = [
  {
    name: "Anam Ali",
    age: 20,
    rollNumber: "1234",
    image: "/images/2.jpg", 
    className: "Second Year Arts",
  },
  {
    name: "Sara Ahmed",
    age: 19,
    rollNumber: "1235",
    image: "/images/3rd.jpg", 
    className: "Second Year Science",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Student ID Cards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            image={student.image}
            ClassName={student.className}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
