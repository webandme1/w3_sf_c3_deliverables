import React from 'react'
import Movie from '../Movie/Movie'
import './Genere.css';


function Genre({name,description,movieTitle1, movieTitle2}) {

    return (
                <>
                    <details className='HeaderRow'>
                        <summary> Genre - {name} </summary>
                        <div className="desciptionText">{description}</div>
                        <Movie title={movieTitle1} year={(name=="Comedy")?'1994':'1981'} />
                        <Movie title={movieTitle2} year={(name=="Comedy")?'1994':'1997'} />
                    </details>
                </>
            )
}

export default Genre