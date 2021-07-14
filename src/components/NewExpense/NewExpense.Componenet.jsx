import React, {useState} from 'react';
import './NewExpense.Style.css'
import ExpenseForm from "./ExpenseForm/ExpenseForm.Componenet";
const NewExpense = (props) => {

  const [isEditing,setisEditing]=  useState(false)

  const startEditingHandler = () =>{
      setisEditing(true)
  }

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random.toString()
        }
        props.onAddExpense(expenseData);
        setisEditing(false);
    }

    const stopEditingHandler = () =>{
      setisEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing &&  <button onClick={startEditingHandler}> Add new Expense</button> }
            {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> }


        </div>
    );
};

export default NewExpense;