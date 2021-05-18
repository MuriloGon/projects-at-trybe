import React, { Component } from 'react';

class RatingForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      comment: '',
      stars: 0,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    // const obj = this.state;
    // const { addRating } = this.props;
    // addRating(obj);
    this.setState({
      email: '',
      comment: '',
      stars: 0,
    });
  }

  render() {
    const { email, comment, stars } = this.state;
    return (
      <form>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <textarea
          name="comment"
          type="text"
          placeholder="Mensagem"
          value={ comment }
          onChange={ this.handleChange }
        />
        <input
          name="stars"
          type="number"
          min="0"
          max="5"
          value={ stars }
          onChange={ this.handleChange }
        />
        <button type="submit" onClick={ this.handleClick }>Avaliar</button>
      </form>
    );
  }
}

export default RatingForm;
