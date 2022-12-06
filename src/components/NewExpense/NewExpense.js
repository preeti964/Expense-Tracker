import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props)=>{
  const[IsEditing, setIsEditing]=useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const startEditingHander =()=>{
        setIsEditing(true);
    }
    const stopEditingHander = ()=>{
        setIsEditing(false);
    }
    return (
    <div className='new-expense'>
        {!IsEditing && <button onClick={startEditingHander}>Add New Expense</button>}
    {IsEditing && <ExpenseForm  onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHander}/>}
    </div>
    );
}

export default NewExpense;