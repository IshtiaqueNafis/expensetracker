import React from 'react';
import './expenseitem.css'
import ExpenseDate from "./ExpenseDate.components";
function ExpenseItem(props) {
 const month = props.date.toLocaleString(`en-US`, {month:'long'})
 const day = props.date.toLocaleString(`en-US`, {day:'2-digit'})
 const year = props.date.getFullYear()
    return (

        <div className='expense-item'>
            <div className="expense-item__description">
                <ExpenseDate date={props.date}/>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>

    );
}

export default ExpenseItem;