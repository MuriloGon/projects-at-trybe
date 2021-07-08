import React from 'react';

function Header() {
  return (
    <header>
      <div>
        <img data-testid="recipe-photo" src="void" alt="Main" />
      </div>
      <div>
        <h1 data-testid="recipe-title">Title</h1>
        <h2 data-testid="recipe-category">Recipe category</h2>
        <button type="button" data-testid="share-btn">Share</button>
        <button type="button" data-testid="favorite-btn">Favorite</button>
      </div>
    </header>
  );
}

export default Header;
