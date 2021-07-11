import React from 'react';
import './NewExpense.Style.css'
import ExpenseForm from "./ExpenseForm/ExpenseForm.Componenet";
const NewExpense = () => {
    return (
        <div className="new-expense">
       <ExpenseForm/>
        </div>
    );
};

export default NewExpense;