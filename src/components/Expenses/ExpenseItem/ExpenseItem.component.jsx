import React,{useState} from 'react'; // use state helps with define values as state.
import './expenseitem.style.css'
import Card from "../../UI/Card.Componenet";
import ExpenseDate from "../ExpenseDate/ExpenseDate.components";
const ExpenseItem = props => {
   const [title,setTitle]=   useState(props.title); // this is a hook can not be called other componenet
    // returns array with two elements one is tittle for the oiginal value
    //  next is the setTitle which is for setting a value think its a setter in c#

    const clickHandler =()=> {
        setTitle('updated'); // value is being passed here this will be the value.
        console.log('clicked');
    } // hander is a good convention showing it is an event based.
    return ( // props here so data can be passed dynamically.

        <Card className='expense-item'>
            <div className="expense-item__description">
                <ExpenseDate date={props.date}/> {/* this where the expendse date goes  */}
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler }> {/*do not put function as () like this put the function without it thus it act as a pointer */}
                Change Title
            </button>
        </Card>

    );
};

export default ExpenseItem;