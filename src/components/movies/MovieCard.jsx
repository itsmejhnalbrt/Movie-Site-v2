// hooks
import Star from "@/assets/icons/cards/star.svg";
import PosterNotAvailable from "./PosterNotAvailable";

const Card = ({
  movie: {
    title,
    poster_path,
    original_language,
    release_date,
    vote_average,
    name,
  },
}) => {
  return (
    <div className="movie-card space-y-5 text-white!">
      {poster_path ? (
        <img
          src={
            poster_path
              ? "https://image.tmdb.org/t/p/w500/" + poster_path
              : "/no-movie.png"
          }
          className="block aspect-6/9 w-fit object-cover"
          alt={title}
        />
      ) : (
        <PosterNotAvailable />
      )}

      <div className="flex flex-col justify-between space-y-3">
        <h3 className="leading-none font-medium">{title ? title : name}</h3>

        <div className="content">
          <div className="rating">
            <img src={Star} alt="star" />
            <p>{vote_average ? vote_average.toFixed(1) : "0"}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
