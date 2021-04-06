import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="hero is-max-desktop">
        <div className="hero-body">
          <img src="/images/loading.gif" alt="loading" width="200px" height="auto" />
          <span id="body-title">Carregando...</span>
        </div>
      </div>
    );
  }
}

export default Loading;
