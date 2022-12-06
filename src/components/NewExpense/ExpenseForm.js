import React, {useState} from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpenseForm.css';
const ExpenseForm = (props) =>{
    const [enteredTitle , setenteredTitle] = useState('');
    const [enteredAmount,setenteredAmount] = useState('');
    const [enteredDate,setenteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount:'',
    //     enteredDate:''
    // });


    const titlechangehandler = (event)=>{
        // console.log(event.target.value);
        setenteredTitle(event.target.value);

        // 2nd Approach
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })

        // 3rd Approach
        // setUserInput((prev)=>{
        //     return {...prev,enteredTitle: event.target.value}
        // })
    }
   
    const amountchangehandler = (event)=>{
        setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })

        // setUserInput((prev)=>{
        //     return {...prev,enteredAmount: event.target.value}
        // })
    }
    
    const datechangehandler = (event)=>{
        setenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })

        // setUserInput((prev)=>{
        //     return {...prev,enteredDate: event.target.value}
        // })
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
     
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };
  
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titlechangehandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountchangehandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01"max="2022-12-31" onChange={datechangehandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button'onClick={props.onCancel} >Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;