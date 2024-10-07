
import React from "react";

const NoBookmarks = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/6nSHrGp/Favorite-illustration.png" alt="empty/image"
                 className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-3 font-[500] text-black">No Favourites</h1>

            <p className="text-[0.9rem] text-gray-500">You can add an item to your favourites by clicking “Star
                Icon”</p>
        </div>
    );
};

export default NoBookmarks;
                    