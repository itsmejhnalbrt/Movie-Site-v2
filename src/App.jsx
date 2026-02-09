// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card from './components/movies/MovieCard';

const App = () => {
  
  // Dummy data
  const movies = [ 
    {id: 1, title: 'Matrix'}, 
    {id: 2, title: 'Inception'}, 
    {id: 3, title: 'Interstellar'},
    {id: 4, title: 'Tenet'}
  ];

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-8'>
        Movies 123
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {
          movies.map((movie) => (
            <Card key={movie.id} title={movie.title} />
          ))
        }
      </div>
    </>
  )
}

export default App
