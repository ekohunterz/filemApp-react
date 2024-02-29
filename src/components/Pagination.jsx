export default function Pagination({ page, setPage, totalPage }) {
  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  return (
    <div className='join'>
      <button
        className='join-item btn'
        onClick={() => handlePageChange(1)}
      >
        First Page
      </button>
      <button
        className='join-item btn'
        onClick={() => handlePageChange(page - 1)}
      >
        «
      </button>
      <button className='join-item btn'>Page {page}</button>
      <button
        className='join-item btn'
        onClick={() => handlePageChange(page + 1)}
      >
        »
      </button>
      <button
        className='join-item btn'
        onClick={() => handlePageChange(totalPage)}
      >
        Last Page
      </button>
    </div>
  )
}
