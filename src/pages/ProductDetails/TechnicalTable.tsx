/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Product } from '../../helpers/mercadolibre/product';

const TechnicalTable: FC<{ product: Product | null }> = ({ product }) => {
  console.log('oi');
  return (
    <table>
      {product?.attributes.map(
        ({ id, name, value_name }) => (
          <tr key={id}>
            <th>{name}</th>
            <th>{value_name}</th>
          </tr>
        ),
      )}
    </table>
  );
};

export default TechnicalTable;
