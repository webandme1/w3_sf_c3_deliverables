import React from 'react';
import './Movie.css';

function Movie({title,year}) {
  return (
    <>
        <div className='Content'>
            <div className='rowHeader'>Movie</div>
            <div>{title}</div>
            <div className='rowHeader'>Year</div>
            <div>{year}</div>
        </div>
    </>
  )
}

export default Movie