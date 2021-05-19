import React, { Component } from 'react';

class ReviewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  displayProductImage = (title, thumbnail) => (
    <div>
      <img alt={ title } src={ thumbnail } />
    </div>
  );

  displayProducts = (id, title, price, quantity) => (
    <div>
      <h3>
        { title }
      </h3>
      <p>
        ID:
        <span>{ id }</span>
      </p>
      <p>
        Preço unitário:
        <span>{ price }</span>
      </p>
      <p>
        Quantidade:
        <span>{ quantity }</span>
      </p>
    </div>
  );

  displayTotalPrice = (cartItems) => (
    <div>
      <h3>Preço total:</h3>
      <span>
        { cartItems.reduce((acc, { price, quantity }) => (acc + (price * quantity)), 0) }
      </span>
    </div>
  );

  render() {
    const { cartItems } = this.state;
    return (
      <section>
        <ul>
          { cartItems.map(({ id, title, price, quantity, thumbnail }) => (
            <li key={ id }>
              <div>
                { this.displayProductImage(title, thumbnail) }
                { this.displayProducts(id, title, price, quantity) }
              </div>
            </li>
          ))}
        </ul>
        <div>
          { this.displayTotalPrice(cartItems) }
        </div>
      </section>
    );
  }
}

export default ReviewProducts;
