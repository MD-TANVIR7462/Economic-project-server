
import React from "react";

const NoProducts = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-6 font-[500] text-black">Result Not Found</h1>

            <p className="text-[0.9rem] text-gray-500">Whoops ... this information is not available for a moment</p>
        </div>
    );
};

export default NoProducts;
                    