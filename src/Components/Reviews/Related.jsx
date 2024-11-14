import React from "react";
import { useState } from "react";
import Slidercart from "../SliderITEm/Slidercart";
import { useEffect } from "react";
import SubProductCarousel from "../Carousel_Subproduct/SubProductCarousel";

const Related = ({ sub, id }) => {
  const [finalSub, setFinalSub] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    if (sub.length > 1) {
      const filteredSub2 = sub.filter((signle) => signle._id !== id);
      setText("Related Product's");
      setFinalSub(filteredSub2);
    } else {
      setFinalSub([]);
      setText("NO Related Product's");
    }
  }, [sub, id]);
  console.log(finalSub);

  return (
    <div className="my-16">
      <h1 className="text-center text-2xl md:text-3xl font-bold mt-8 mb-6 md:mb-12 ">
        {text}
      </h1>
      <div className=" ">
    <div className="flex flex-col md:flex-row flex-wrap gap-6 mx-auto w-[80%]">
    {
                finalSub.map(product => <Slidercart product={product} key={product._id}></Slidercart>) 
            }
    </div>
        {/* {finalSub?.length > 0 && (
          <SubProductCarousel finalSub={finalSub} key={1} />
        )} */}
      </div>
    </div>
  );
};

export default Related;
