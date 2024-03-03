import Card from '../components/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import { getTopMovies } from '../services/movie.services'
import Pagination from '../components/Pagination'

export default function TopRatedPage() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    document.title = 'Top Rated Movies - Movie App'
  })

  useEffect(() => {
    getTopMovies(page, (data) => {
      setMovies(data)
    })
  }, [page])
  return (
    <>
      <div className='space-y-4 p-4 mb-12'>
        <h1 className='text-3xl font-bold '>Top Rated Movies</h1>
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
