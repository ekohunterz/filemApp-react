import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

/* eslint-disable react/prop-types */
export default function Card({ movie }) {
  return (
    <NavLink
      to={`/detail/${movie.id}`}
      className='flex-grow card w-52 card-normal overflow-hidden  bg-base-100 shadow-xl group'
    >
      <figure className='relative'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='h-full w-full object-cover'
          loading='lazy'
        />
        <div className='absolute top-0 right-0 bg-orange-500 rounded-bl-lg text-white px-2 py-1 '>
          <div className='flex items-center'>
            <Icon
              icon='mdi:star'
              fontSize={12}
            />
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
        <div className='absolute bottom-0 py-2 bg-primary-content/80 w-full opacity-0 group-hover:opacity-100 ease-in-out duration-300'>
          <div className='card-title'>
            <span className='text-center mx-auto'>{movie.title}</span>
          </div>
        </div>
      </figure>
    </NavLink>
  )
}
