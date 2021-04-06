import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import 'bulma/css/bulma.min.css';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, storyline, id } = this.props.movie;
    return (
      <div className="card" data-testid="movie-card">
        <div className="card-header" style={ { backgroundImage: `url(${imagePath})` } }>
          <div className="card-header-title">
            {title}
          </div>
        </div>
        <div className="card-content">
          {storyline}
        </div>
        <div className="card-footer">
          <span className="footer-text">
            <Link to={ `movies/${id}` }>VER DETALHES</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default MovieCard;
