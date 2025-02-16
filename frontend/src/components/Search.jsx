import React from 'react'

const Search = () => {

  return (
    <>
      <form className='d-flex'>
        <input className="form-control me-2"
          type="search" placeholder="Search"
          aria-label="Search"
          size={40}
        />

        <button
          className="btn btn-outline-success text-light"
          type="submit"
        >Search
        </button>
      </form>
    </>
  )
}

export default Search