import React , {useState } from "react";
import ExpenseForm from "./Form/ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
const startEditingHandler = () => {
        setIsEditing(true)
}
const stopEditingHandler = () => {setIsEditing(false)};
    return (
        <div className="newexpense">
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;