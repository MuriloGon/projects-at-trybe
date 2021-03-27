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
      storyline: 'action',
    }
  }

  readonly handleTitleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const value = e.target.value
    this.setState({title: value});
  }

  render(): JSX.Element {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input type="text" value={title} data-testid="title-input" onChange={this.handleTitleInput} />
        </label>
      </form>
    );
  }
}

export default AddMovie;
