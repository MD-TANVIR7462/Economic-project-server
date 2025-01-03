import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Related_carousel from "./Related_carosel";
import SectionTitle from "../SectionTitle/Section_Title";

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
      <div className="mx-auto w-[91%]">
        <SectionTitle title={text} />
        <Related_carousel products={finalSub} key={111} />
      </div>
    </div>
  );
};

export default Related;
