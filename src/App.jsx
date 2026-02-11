import { useState, useEffect } from 'react'
// import pol from '@/assets/videos/pol.mp4';
import Card from './components/movies/MovieCard';
import Search from './components/movies/Search';
import { useApi } from './hooks/useFetchApi';

const App = () => {
  // useState
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api = useApi();

  const fetchMovies = async () => {
    // setLoading((prevState) => !prevState);
    try {
      setIsLoading(true);
      const data = await api.get('/discover/movie', 'sort_by=popularity.desc');                                                  
      setMovies(data.results);
      console.log(data);
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred while fetching movies.');   
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className='pattern'>
      </div>
      
      <div className='wrapper'>
        <header>
          <h1>
            Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassle
          </h1>
          <p className='text-white'>{searchTerm}</p>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className='all-movies'>
          <h2>All Movies</h2>
          {
            isLoading ? (
              <p>Loading...</p>
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) :
            (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
              {
                movies.map((movie) => (
                  <Card key={movie.id} title={movie.title} src={movie.src} />
                ))
              }
            </div>
            )
          }
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </main>
  )
}

export default App
