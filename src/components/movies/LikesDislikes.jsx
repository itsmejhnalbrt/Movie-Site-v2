import React from "react";
import ThumbsDownSvg from "@/assets/icons/cards/thumbs-down.svg?react";
import ThumbsUpSvg from "@/assets/icons/cards/thumbs-up.svg?react";
import { useState, useEffect } from "react";

const LikesDislikes = () => {
  // useState
  const [likeStatus, setLikeStatus] = useState(false);
  // const [viewCount, setviewCount] = useState(0);

  // useEffect
  useEffect(
    () => {
      console.log("CARD RENDERED");
    },
    [
      /* viewCount */
    ],
  );

  // functions
  const toggleLike = (value) =>
    setLikeStatus(likeStatus === value ? false : value);

  return (
    <div>
      <button className="cursor-pointer p-1" onClick={() => toggleLike("like")}>
        <ThumbsUpSvg
          className={`h-fit w-5 ${likeStatus === "like" ? "fill-blue-500!" : "fill-white"}`}
        />
      </button>
      <button className="cursor-pointer" onClick={() => toggleLike("dislike")}>
        <ThumbsDownSvg
          className={`h-fit w-5 ${likeStatus === "dislike" ? "fill-blue-500!" : "fill-white"}`}
        />
      </button>
    </div>
  );
};

export default LikesDislikes;
