import React from 'react'
import Movie from '../Movie/Movie'
import './Genere.css';


function Genre({name,description,movieTitle1, movieTitle2}) {
 
    if(name=="Comedy"){
        return (
            <>
                <details className='HeaderRow'>
                    <summary> Genre - {name} </summary>
                    <div className="desciptionText">{description}</div>
                    <Movie title={movieTitle1} year="1994"/>
                    <Movie title={movieTitle2} year="1994"/>
                </details>
            </>
        )
    }
    else
    {
        return (
            <>
                <details className='HeaderRow'>
                    <summary> Genre - {name} </summary>
                    <div className="desciptionText">{description}</div>
                    <Movie title={movieTitle1} year="1981"/>
                    <Movie title={movieTitle2} year="1997"/>
                </details>
            </>
        )

    }
}

export default Genre