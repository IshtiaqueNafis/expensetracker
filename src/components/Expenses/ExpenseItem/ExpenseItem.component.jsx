import React, {useState} from 'react'; // use state helps with define values as state.
import './expenseitem.style.css'
import Card from "../../UI/Card.Componenet";
import ExpenseDate from "../ExpenseDate/ExpenseDate.components";

const ExpenseItem = props => {

    return ( // props here so data can be passed dynamically.

        <Card className='expense-item'>
            <div className="expense-item__description">
                <ExpenseDate date={props.date}/> {/* this where the expense date goes  */}
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>

    );
};

export default ExpenseItem;