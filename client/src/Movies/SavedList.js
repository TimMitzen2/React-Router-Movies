import React from 'react';
import {Link} from 'react-router-dom'
import MovieList from './MovieList';
const SavedList = ({list}) => (
  <div className="saved-list">
  <h3>Saved Movies:</h3>
 {list.map(movie => (
   
 <span key={movie.id} className="saved-movie"><Link to={`/movies/${movie.id}`}>{movie.title}</Link></span>
    ))}
    <Link to='/'>
    <button className="home-button">Home</button>
    </Link>
  </div>
);

export default SavedList;
