import React from 'react';
import { useSelector } from 'react-redux';
import WalletHeader from './WalletHeader';
import WalletExpensesForm from './WalletExpensesForm';
import WalletTable from './WalletExpensesTable';
import ExpensesEdit from './ExpensesFormEdit';

const Wallet = () => {
  const edit = useSelector((st) => st.wallet.editEnabled);
  return (
    <>
      <WalletHeader />
      {edit ? <ExpensesEdit /> : <WalletExpensesForm />}
      <WalletTable />
    </>
  );
};

export default Wallet;
