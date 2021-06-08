import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';

const FormContainer = styled.section`

  .table-container {
    background: white;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 15%);
    border-radius: 8px;
  }

  table {
    padding: 0.5rem;
    width: 100%;
  }

  img {
    width: 100%;
  }

  .customer-item {
    text-align: left;
    th {
      padding-inline: 1rem;
    }
  }
  
  .footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
    font-size: 1.3rem;
    background: hsl(0, 0%, 95%);
  }

  .img-container {
    width: 150px;
    height: 150px;
  }
`;

const PurchaseSummary: FC = () => {
  const cartItems = useSelector((st: RootState) => st.cart.items);
  const total = cartItems.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  return (
    <FormContainer>
      <h2>Revise seus produtos</h2>
      <div className="table-container">
        <table>
          {cartItems.map(({
            image, price, quantity, title, id,
          }) => (
            <tr key={id} className="customer-item">
              <th>
                <div className="img-container">
                  <img src={image} alt={title} />
                </div>
              </th>
              <th>{title}</th>
              <th>
                R$
                {' '}
                {Number(quantity * price).toFixed(2)}
              </th>
            </tr>
          ))}
        </table>
        <div className="footer">
          <div>
            <b>Total:</b>
            {' R$'}
            {Number(total).toFixed(2)}
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default PurchaseSummary;
