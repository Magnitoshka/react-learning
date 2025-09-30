import ExpenseShow from "./components/ExpenseShow";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/ExpenseShow";

function App() {
    //main


    const addExpenseHandler = expense => {
        console.log(expense);
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses/>
        </div>
    );
}

export default App;
