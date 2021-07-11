import React from 'react';
import './expense.style.css'

const ExpenseForm = () => {
    return (
        <form>
            <div className='new-expense__control'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text"/>
                </div>

                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="number" min='0.01' step="0.01"/>
                </div>

                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="date" min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className='new new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;