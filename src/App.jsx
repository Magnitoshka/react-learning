import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/ExpenseShow";
import React, {useState} from "react";

const DUMB_EXPENSES = [{
    id: `el1`,
    title: `Toilet Paper`,
    amount: 94.12,
    date: new Date(2020, 7, 14),
}, {
    id: `el2`,
    title: `Car Insurance`,
    amount: 295.12,
    date: new Date(2021, 1, 15),
}, {
    id: `el3`,
    title: `be calm`,
    amount: 124.12,
    date: new Date(2025, 2, 19),
},];

function App() {
    //main
const [expenses,setExpenses]=useState(DUMB_EXPENSES);
    const addExpenseHandler = expense => {
        setExpenses( prevExpenses =>{
            return[expense,...prevExpenses];
        });
        console.log(expense);
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
