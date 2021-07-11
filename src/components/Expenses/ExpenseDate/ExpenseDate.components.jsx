import React from 'react';
import './expenseDate.style.css'
const ExpenseDate = props => {
    const month = props.date.toLocaleString(`en-US`, {month:'long'}) // this gets the month
    const day = props.date.toLocaleString(`en-US`, {day:'2-digit'}) // this gets the month
    const year = props.date.getFullYear() // this gets the full year
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
};

export default ExpenseDate;