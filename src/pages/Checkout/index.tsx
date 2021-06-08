import React, { FC } from 'react';
import { Main } from '../../styles/Container';
import CustomerInfoForm from './CustomerInfoForm';
import PurchaseSummary from './PurchaseSummary';

const Checkout: FC = () => (
  <Main>
    <PurchaseSummary />
    <CustomerInfoForm />
  </Main>
);

export default Checkout;
