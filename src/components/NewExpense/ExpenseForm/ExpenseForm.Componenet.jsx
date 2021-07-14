import React, {useState} from 'react';
import './expense.style.css'

const ExpenseForm = (props) => {
    //region state values
    const [enteredTitle, setEnteredTitle] = useState(''); // 3 different use state is being used.
    // enetred title and setENteredTitle is the title of the state. 11
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //endregion

//region EventHandlerFunction
    const titleChangeHandler = event => setEnteredTitle(event.target.value)
    const amountChangeHandler = event => setEnteredAmount(event.target.value)
    const dateChangeHandler = event => setEnteredDate(event.target.value)
//endregion


    const submitHandler = (event) => {
        event.preventDefault() // this prevents it from going to default
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('') // this nulls everything here
        setEnteredAmount('');
        setEnteredDate('');


    }
//region Form
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>

                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />

                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                       value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

    // endregion
};

export default ExpenseForm;