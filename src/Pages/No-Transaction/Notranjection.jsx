import React from "react";

const Notranjection = () => {
  return (
    <div className="boxShadow bg-white  w-[90%] max-w-3xl mx-auto  my-[10dvh] p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
      <img
        src="https://i.ibb.co/z8VbyRc/Charco-Mobile-Life.png"
        alt="empty/image"
        className="w-full sm:w-[200px]"
      />

      <h1 className="text-[1.4rem] mt-6 font-[500] text-black">
        No transactions yet
      </h1>

      <p className="text-[0.9rem] text-gray-900"> Make Your First Transfer</p>
    </div>
  );
};

export default Notranjection;
