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
        <div className='w-full mb-12'>
          <div className='relative'>
            <figure>
              <img
                className='w-full min-h-full object-cover'
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                loading='lazy'
              />
            </figure>
            <div className='absolute w-full px-12 top-32'>
              <div className='flex flex-wrap gap-4 p-6 bg-base-100/95 shadow-xl'>
                <div className='pr-4 lg:w-1/5'>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      className='h-72 object-cover'
                    />
                  </figure>
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
                  <div className='flex justify-between'>
                    <div>
                      <div className='text-4xl font-bold'>{movie.title}</div>
                      <p className='font-light leading-relaxed mt-1'>{movie.tagline}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
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
                    <div className='lg:w-1/3 leading-relaxed'>
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
        </div>
      )}
    </>
  )
}
