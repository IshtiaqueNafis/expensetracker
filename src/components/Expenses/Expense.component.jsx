import React, {useState} from 'react';
import Card from "../UI/Card.Componenet";
import './Expense.style.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem.component";
import ExpenseFilter from "../Filter/ExpenseFilter.Component";
import ExpenseList from "./ExpenseList/ExpenseList.Component";

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onChangeFilter = (year) => {
        setFilteredYear(year);
    }
const filterExpenses = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear; // this sets
    });




    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={onChangeFilter}/>
            <ExpenseList expenses={filterExpenses}/>
        </Card>
    );
};

export default Expense;