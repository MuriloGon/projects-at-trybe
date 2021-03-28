import React, { Component } from 'react';
import { IMovie } from './Interfaces';
interface IProp {
  onClick: (args: IMovie) => void;
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
      bookmarked: false,
      genre: 'action'
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
    let value = parseFloat(e.target.value);
    value = value < 0 || isNaN(value) ? 0 : value;
    this.setState({ rating: value });
  }

  readonly handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    this.setState({ genre: value });
  }

  readonly reset = (): void => {
    this.setState({
      genre: 'Action',
      rating: 0,
      storyline: '',
      imagePath: '',
      subtitle: '',
      title: '',
      bookmarked: false,
    }, () => { });
  }

  readonly handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {

    // const { storyline, imagePath, subtitle, title } = this.state;
    // const test = (storyline !== '' && imagePath !== '' && subtitle !== '' && title !== '');

    // if (test) {
      this.props.onClick(this.state);
    // }
    // else { alert('Preencha tudo') };
    this.reset();
    e.preventDefault();
  }

  render(): JSX.Element {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const options = [
      { innerText: 'Ação', value: 'action' },
      { innerText: 'Comédia', value: 'comedy' },
      { innerText: 'Suspense', value: 'thriller' },
    ]
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input required type="text" value={title} data-testid="title-input" onChange={this.handleTitleInput} />
        </label>

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input required type="text" value={subtitle} data-testid="subtitle-input" onChange={this.handleSubtitleInput} />
        </label>

        <label data-testid="image-input-label">
          Imagem
          <input required type="text" value={imagePath} data-testid="image-input" onChange={this.handleImgPathInput} />
        </label>

        <label data-testid="storyline-input-label">
          Sinopse
          <textarea required value={storyline} data-testid="storyline-input" onChange={this.handleHistorylineInput} />
        </label>

        <label data-testid="rating-input-label">
          Avaliação
          <input required type="number" value={isNaN(rating) ? 0 : rating} data-testid="rating-input" onChange={this.handleRatingInput} />
        </label>

        <label data-testid="genre-input-label">
          Gênero
          <select required data-testid="genre-input" onChange={this.handleSelect} value={genre}>
            {options.map(
              (op, i) =>
                <option data-testid="genre-option" key={i} value={op.value}>{op.innerText}</option>)
            }
          </select>
        </label>

        <button data-testid="send-button" onClick={this.handleSubmit}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
