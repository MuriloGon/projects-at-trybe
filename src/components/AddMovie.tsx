import React, { Component } from 'react';
import { IMovie } from './Interfaces';
interface IProp {
  onClick?: () => void;
}

export class AddMovie extends Component<IProp, IMovie> {
  constructor(props: IProp) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline: '',
    }
  }

  readonly handleTitleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value
    this.setState({ title: value });
  }
  readonly handleSubtitleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value
    this.setState({ subtitle: value });
  }

  readonly handleImgPathInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value
    this.setState({ imagePath: value });
  }

  readonly handleHistorylineInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = e.target.value
    this.setState({ storyline: value });
  }

  readonly handleRatingInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = parseFloat(e.target.value);
    this.setState({ rating: value });
  }

  render(): JSX.Element {
    const { title, subtitle, imagePath, storyline, rating } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input type="text" value={title} data-testid="title-input" onChange={this.handleTitleInput} />
        </label>

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value={subtitle} data-testid="subtitle-input" onChange={this.handleSubtitleInput} />
        </label>

        <label data-testid="image-input-label">
          Imagem
          <input type="text" value={imagePath} data-testid="image-input" onChange={this.handleImgPathInput} />
        </label>

        <label data-testid="storyline-input-label">
          Sinopse
          <textarea value={storyline} data-testid="storyline-input" onChange={this.handleHistorylineInput}/>
        </label>

        <label data-testid="rating-input-label">
          Avaliação
          <input type="number" value={rating} data-testid="rating-input" onChange={this.handleRatingInput} />
        </label>
      </form>
    );
  }
}

export default AddMovie;
