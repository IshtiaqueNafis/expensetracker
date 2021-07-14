import React, {useState} from 'react';
import Card from "../UI/Card.Componenet";
import './Expense.style.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem.component";
import ExpenseFilter from "../Filter/ExpenseFilter.Component";

const Expense = (props) => {
    const [filteredYear, setFilteryear] = useState('2020');

    const onChangeFilter = (year) => {
        setFilteryear(year);
    }
const filterExpenses = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
    }

)
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={onChangeFilter}/>
            {filterExpenses.map(expense =>
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>
            )}
        </Card>
    );
};

export default Expense;