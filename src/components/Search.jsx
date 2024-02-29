import { useState } from 'react'
import { searchMovies } from '../services/movie.services'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export default function Search() {
  const [search, setSearch] = useState('')
  const [typingTimeout, setTypingTimeout] = useState(null)

  const handleChange = (e) => {
    const searchText = e.target.value

    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }

    const newTypingTimeout = setTimeout(() => {
      searchMovies(searchText, 1, (data) => {
        setSearch(data)
      })
    }, 500)

    setTypingTimeout(newTypingTimeout)
  }

  const handleClearSearch = () => {
    setSearch('')
    setTypingTimeout(null)
  }

  return (
    <div className='relative'>
      <label className='input input-bordered flex items-center gap-2'>
        <input
          type='text'
          className='grow'
          placeholder='Search'
          onChange={handleChange}
        />
        {search?.results?.length > 0 ? (
          <Icon
            icon='mdi:close'
            onClick={handleClearSearch}
          />
        ) : (
          <Icon icon='mdi:magnify' />
        )}
      </label>
      {search?.results?.length > 0 && (
        <ul
          tabIndex={0}
          className='absolute z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          {search.results.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/detail/${movie.id}`}
                onClick={handleClearSearch}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
