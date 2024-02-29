import { useState } from 'react'
import Card from '../components/Card'
import { useEffect } from 'react'
import { getMovies } from '../services/movie.services'
import Pagination from '../components/Pagination'

export default function HomePage() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    document.title = 'Discover - Movie App'
  })

  useEffect(() => {
    getMovies(page, (data) => {
      setMovies(data)
    })
  }, [page])

  return (
    <>
      <div className='space-y-4 mb-12'>
        <h1 className='text-3xl font-bold '>Discover</h1>
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
