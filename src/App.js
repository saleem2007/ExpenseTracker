import React, { useState } from 'react' ;

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

function App() {

  const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date("March 21, 2021"),
  },

  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date("May 31, 2019"),

  },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.99,
    date: new Date("April 10, 2020"),
  },
  {
    id: "e4",
    title: "Wooden Desk",
    amount: 450,
    date: new Date("January 10, 2019"),
  },
];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = expense => {

    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
