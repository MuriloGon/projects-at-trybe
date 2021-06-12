import React from 'react';
import WalletHeader from './WalletHeader';
import WalletExpensesForm from './WalletExpensesForm';
import WalletTable from './WalletExpensesTable';

const Wallet = () => (
  <>
    <WalletHeader />
    <WalletExpensesForm />
    <WalletTable />
  </>
);

export default Wallet;
