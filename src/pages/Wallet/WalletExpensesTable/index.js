/* eslint-disable react/no-multi-comp */
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './styles/WalletExpensesTable.css';

const WalletExpensesTable = () => (
  <div>
    <table className="expenses-table">
      <TableHeader />
      <TableBody />
    </table>
  </div>
);

export default WalletExpensesTable;
