import React from 'react';
import Card from "../UI/Card.Componenet";
import './Expense.style.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem.component";
const Expense = (props) => (
    <Card className='expenses'>
        {props.expenses.map(expense=>
            <ExpenseItem  title={expense.title} date={expense.date} amount={expense.amount}  />
        )}
    </Card>
);

export default Expense;