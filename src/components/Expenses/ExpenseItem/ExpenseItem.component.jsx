import React from 'react';
import './expenseitem.style.css'
import Card from "../../UI/Card.Componenet";
import ExpenseDate from "../ExpenseDate/ExpenseDate.components";
const ExpenseItem = props => ( // props here so data can be passed dynamically.

    <Card className='expense-item'>
        <div className="expense-item__description">
            <ExpenseDate date={props.date}/> {/* this where the expendse date goes  */}
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    </Card>

);

export default ExpenseItem;