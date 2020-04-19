import React from 'react'
import Rating from './rating'

const MovieCard = (props) => {

    const {movie} = props


    return( 
        <div className="card" style={{width: '18rem'}}>
            <Rating  count={movie.star} />
          <img src={movie.img} className="card-img-top" alt="..." />
          <div className="card-body">
    <h5 className="card-title">{movie.name}</h5>
    <p className="card-text">{ movie.duration } - { movie.year}</p>
           
          </div>
        </div>)
}

export default MovieCard