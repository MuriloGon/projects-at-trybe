import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  deleteMovie() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(Number(id));
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie }, () => {
      this.setState({ loading: false });
    });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    const { movie } = this.state;
    const { match: { url } } = this.props;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div className="card movie-details" data-testid="movie-details">
        <div className="card-header movie-details__header">
          <h2 className="card-header-title movie-details__header-title">{title}</h2>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
        </div>
        <div className="card-content movie-details__content">
          <p>
            <span className="has-text-weight-bold">Subtitle: </span>
            {subtitle}
          </p>
          <p>
            <span className="has-text-weight-bold">Storyline: </span>
            {storyline}
          </p>
          <p>
            <span className="has-text-weight-bold">Genre: </span>
            {genre}
          </p>
          <p>
            <span className="has-text-weight-bold">Rating: </span>
            {rating}
          </p>
        </div>
        <div className="card-footer movie-details__footer">
          <span className="footer-text">
            <Link to={ `${url}/edit` }>EDITAR</Link>
          </span>
          <span className="footer-text">
            <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
          </span>
          <span className="footer-text">
            <Link to="/">VOLTAR</Link>
          </span>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape(
    {
      params: PropTypes.shape({ id: PropTypes.string.isRequired }),
      url: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default MovieDetails;
