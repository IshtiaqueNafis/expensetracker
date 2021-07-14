import React from 'react';
import './expenseDate.style.css'
const ExpenseDate = props => {
    //region month year and date
    const month = props.date.toLocaleString(`en-US`, {month:'long'}) // this gets the month
    // use props to get get the date.
    const day = props.date.toLocaleString(`en-US`, {day:'2-digit'}) // this gets the month
    //use props to get the date
    const year = props.date.getFullYear() // this gets the full year
    //endregion
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
};

export default ExpenseDate;