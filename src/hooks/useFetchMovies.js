import { useState } from "react";
import { API_URL } from "@/constants/api";
import { useApi } from "@/hooks/useFetchApi";

export function useFetchMovies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api = useApi();
  const fetchMovies = async (query = "") => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await api.get(
        query
          ? `${API_URL.SearchMovies}${encodeURIComponent(query)}&include_adult=true`
          : `${API_URL.DiscoverMovies}?${API_URL.PopularMovies}`,
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

  return {
    fetchMovies,
    searchTerm,
    errorMessage,
    movies,
    isLoading,
    setSearchTerm,
  };
}
