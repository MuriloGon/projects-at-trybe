import React, { Component } from 'react';
import {IMovie} from './Interfaces';
interface IProp {
  onClick: ()=>void;
}

class AddMovie extends Component<IProp, IMovie> {
  constructor(props: IProp){
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline: 'action',
    }
  }
  
  render(): JSX.Element {
    return <h1>oi</h1>;
  }
}

export default AddMovie;
