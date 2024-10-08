
import React from "react";

const NoProducts = () => {

    return (
        <div
            className="boxShadow p-6 bg-white  w-[90%] max-w-3xl mx-auto  my-[10dvh] sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px]  rounded-xl">
            <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-6 font-[500] text-black">No Products Added </h1>

            <p className="text-[0.9rem] text-gray-900">Whoops ... add some ??</p>
        </div>
    );
};

export default NoProducts;
                    