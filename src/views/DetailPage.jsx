import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from '../services/movie.services'

export default function DetailPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState()

  useEffect(() => {
    document.title = `${movie?.title} - Movie App`
  })

  useEffect(() => {
    getMovieDetail(id, (data) => {
      setMovie(data)
    })
  }, [id])
  return (
    <>
      {movie && (
        <div className='w-full relative'>
          <figure className='fixed top-0 bottom-0 -z-10'>
            <img
              className='w-full h-screen object-cover'
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              loading='lazy'
            />
          </figure>
          <div className='w-full min-h-[90dvh] px-12 mt-32 mb-20 md:mb-0'>
            <div className='flex flex-wrap gap-4 p-6 bg-base-100/95 shadow-xl'>
              <div className='pr-4 lg:w-1/5'>
                <figure>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className='lg:h-72 w-full object-cover'
                  />
                </figure>
                <div className='md:hidden mt-6'>
                  <div className='text-4xl font-bold'>{movie.title}</div>
                  <p className='font-light leading-relaxed mt-1'>{movie.tagline}</p>
                </div>
                <div className='divider'></div>
                <div className='space-y-2'>
                  <dl>
                    <dt>Original Title:</dt>
                    <dd className='font-semibold'>{movie.original_title}</dd>
                  </dl>
                  <dl>
                    <dt>Original Language:</dt>
                    <dd className='font-semibold uppercase'>{movie.original_language}</dd>
                  </dl>

                  <dl>
                    <dt>Production Countries:</dt>
                    <dd className='font-semibold'>{movie.production_countries.map((country, index) => (index === movie.production_countries.length - 1 ? country.name : country.name + ', '))}</dd>
                  </dl>
                </div>
              </div>

              <div className='px-2 flex-1'>
                <div className='flex md:justify-between'>
                  <div className='hidden lg:flex flex-col'>
                    <div className='text-4xl font-bold'>{movie.title}</div>
                    <p className='font-light leading-relaxed mt-1'>{movie.tagline}</p>
                  </div>
                  <div className='flex md:flex-col gap-2 md:gap-0 justify-center items-center'>
                    <div className='flex items-center gap-2'>
                      <Icon
                        icon='mdi:star'
                        fontSize={24}
                        color='#facc15'
                      />
                      <span className='text-xl font-semibold'>{movie.vote_average.toFixed(1)}</span>
                    </div>
                    <p>({movie.vote_count})</p>
                  </div>
                </div>

                <div className='divider'></div>
                <div className='flex flex-wrap justify-between'>
                  <div className='lg:w-1/3 w-full leading-relaxed'>
                    <dl className='grid grid-cols-2'>
                      <dt>Status</dt>
                      <dd>{movie.status}</dd>
                    </dl>
                    <dl className='grid grid-cols-2'>
                      <dt>Release Date</dt>
                      <dd>{movie.release_date}</dd>
                    </dl>
                    <dl className='grid grid-cols-2'>
                      <dt>Popularity</dt>
                      <dd>{movie.popularity}</dd>
                    </dl>
                  </div>
                  <div className='flex-1'>
                    <dl>
                      <dt>Production Companies:</dt>
                      <dd className='font-light'>{movie.production_companies.map((company, index) => (index === movie.production_companies.length - 1 ? company.name : company.name + ', '))}</dd>
                    </dl>
                  </div>
                </div>

                <div className='flex flex-wrap gap-2 mt-3'>
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className='badge badge-outline'
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div className='divider'></div>
                <div className='card-title '>Overview</div>
                <p className='font-light mt-2'>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
