import React from "react";

const SectionTitle = ({title}) => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-gradient-x text-center md:text-start">
        {title}
      </h2>
      <div className="">
        <span className="inline-block w-40 h-1 rounded-full bg-purple-500  "></span>
        <span className="inline-block w-10 h-1 ml-1 rounded-full bg-purple-500  "></span>
        <span className="inline-block w-4 h-1 ml-1 rounded-full bg-purple-500  "></span>
      </div>
    </div>
  );
};

export default SectionTitle;
