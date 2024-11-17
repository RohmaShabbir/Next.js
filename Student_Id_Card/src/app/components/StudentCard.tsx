import React from "react";
import Image from "next/image";
import { FaUserGraduate, FaIdCard, FaBirthdayCake } from "react-icons/fa";

type StudentCardProps = {
  name: string;
  age: number;
  rollNumber: string;
  image: string;
  ClassName: string;
};

const StudentCard: React.FC<StudentCardProps> = ({
  name,
  age,
  rollNumber,
  image,
  ClassName,
}) => {
  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden bg-gradient-to-tr from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] shadow-lg p-6 transform hover:rotate-1 hover:scale-105 transition-all duration-300 ease-out">
      
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] rounded-full opacity-40 blur-2xl"></div>
      <div className="relative z-10 text-center">
       
        <Image
          src={image}
          alt={`${name}'s profile picture`}
          width={120}
          height={120}
          className="rounded-full mx-auto border-4 border-[#2563eb] shadow-lg"
        />

       
        <h2 className="mt-4 text-2xl font-bold text-white">{name}</h2>
        <p className="mt-2 text-lg text-[#dbeafe] font-medium">
          <FaUserGraduate className="inline-block mr-2" />
          {ClassName}
        </p>
        <p className="mt-2 text-md text-[#dbeafe]">
          <FaIdCard className="inline-block mr-2 text-yellow-400" />
          Roll No: <span className="font-semibold">{rollNumber}</span>
        </p>
        <p className="mt-2 text-md text-[#dbeafe]">
          <FaBirthdayCake className="inline-block mr-2 text-pink-400" />
          Age: <span className="font-semibold">{age}</span>
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
