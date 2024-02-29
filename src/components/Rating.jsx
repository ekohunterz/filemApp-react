/* eslint-disable react/prop-types */
export default function Rating({ rating }) {
  const isChecked = (value) => rating >= value

  return (
    <div className='rating rating-md rating-half'>
      <input
        type='radio'
        name='rating-10'
        className='rating-hidden'
      />
      {[...Array(10)].map((_, index) => {
        const value = (index + 1) / 2
        const isCheckedValue = isChecked(value)
        const className = `bg-orange-400 mask mask-star-2 mask-half-${(index % 2) + 1}`
        return (
          <input
            key={`rating-${index}`}
            type='radio'
            name='rating-10'
            disabled
            className={className}
            defaultChecked={isCheckedValue}
          />
        )
      })}
    </div>
  )
}
