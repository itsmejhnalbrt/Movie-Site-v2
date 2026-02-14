import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import Card from "@/components/movies/MovieCard";
import Search from "@/components/movies/Search";
import Spinner from "@/components/utils/icons/Spinner";
import Pol from "@/components/movies/Pol";
import { useFetchMovies } from "@/hooks/useFetchMovies";
// import { API_URL } from "@/constants/useApi";

const App = () => {
  // custom hooks
  const {
    fetchMovies,
    searchTerm,
    errorMessage,
    movies,
    isLoading,
    setSearchTerm,
  } = useFetchMovies();

  // useState
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // useDebounce
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    700,
    [searchTerm],
  );

  // useEffect
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without The Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="mt-10">
          <h2 className="text-start">All Movies</h2>
          {isLoading ? (
            <Spinner iconStyle="mx-auto mt-10" />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Pol />
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
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
