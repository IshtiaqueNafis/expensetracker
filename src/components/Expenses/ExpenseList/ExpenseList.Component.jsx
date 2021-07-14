import React from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem.component";
import './ExpenseList.Style.css'

const ExpenseList = (props) => {

    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'> no expense was found </h2>
    }


    return (
        <ul className='expense-list'>
            {props.expenses.map(expense =>
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>)}

        </ul>
    );
}

export default ExpenseList;