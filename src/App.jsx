import { useState, useEffect } from "react";
import pol from "@/assets/videos/pol.mp4";
import Card from "./components/movies/MovieCard";
import Search from "./components/movies/Search";
import Spinner from "./components/utils/icons/Spinner";
import { useApi } from "./hooks/useFetchApi";

const App = () => {
  // useState
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api = useApi();

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await api.get(
        "/discover/movie",
        "sort_by=popularity.desc",
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (data.Response === false) {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovies([]);
        return;
      }

      setMovies(data.results || []);
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while fetching movies.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without The Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="mt-10">
          <h2 className="text-center">All Movies</h2>
          {isLoading ? (
            <Spinner iconStyle="mx-auto" />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="rounded bg-transparent pb-4">
                <video
                  className="aspect-square rounded"
                  width="320"
                  height="240"
                  controls
                >
                  <source src={pol} type="video/mp4" />
                </video>
              </div>

              {movies.map((movie) => (
                <Card key={movie.id} title={movie.title} src={movie.src} />
              ))}
            </div>
          )}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </main>
  );
};

export default App;
