import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props){
   
    // let title1 = props.title;
    const [title,setTitle] = useState(props.title);
    // console.log(("React Expensive evailuated by React"))
    const clikHandler=()=>{
        setTitle("UPLOADED");
        // console.log(title);
    }
    
   
    return(
        <Card className="expense-item">
                <ExpenseDate date ={props.date}/>   
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clikHandler}>Change Title</button>
        </Card>
        
    )
}
export default ExpenseItem;