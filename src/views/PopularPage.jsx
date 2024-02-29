import Card from '../components/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import { getPopularMovies } from '../services/movie.services'
import Pagination from '../components/Pagination'

export default function PopularPage() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    document.title = 'Popular Movies - Movie App'
  })

  useEffect(() => {
    getPopularMovies(page, (data) => {
      setMovies(data)
    })
  }, [page])
  return (
    <>
      <div className='space-y-4 mb-12'>
        <h1 className='text-3xl font-bold '>Popular Movies</h1>
        <ul className='flex flex-wrap gap-6'>
          {movies.results &&
            movies.results.map((movie) => (
              <Card
                key={movie.id}
                movie={movie}
              />
            ))}
        </ul>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        totalPage={movies.total_pages}
      />
    </>
  )
}
