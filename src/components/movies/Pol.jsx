import React from "react";
import pol from "@/assets/videos/pol.mp4";
import Star from "@/assets/icons/cards/star.svg";

const Pol = () => {
  return (
    <div className="movie-card space-y-5 text-white!">
      <video
        className="aspect-6/9 h-auto w-full rounded-xl object-cover"
        width="320"
        height="240"
        controls
      >
        <source src={pol} type="video/mp4" />
      </video>

      <h3 className="leading-none font-medium">The Best Wedding</h3>
      <div className="content">
        <div className="rating">
          <img src={Star} alt="star" />
          <p>10000</p>
        </div>
        <span>•</span>
        <p className="lang">Fil</p>
        <span>•</span>
        <p className="year">2025</p>
      </div>
    </div>
  );
};

export default Pol;
