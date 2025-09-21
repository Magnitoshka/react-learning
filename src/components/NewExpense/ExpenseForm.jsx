import React, { useState } from "react";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState(``);
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredData, setEnteredData] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: ``,
    enteredAmount: ``,
    enteredDate: ``,
  });

  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // console.log(enteredTitle);
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const dateChangeChangeHandler = (event) => {
    // setEnteredData(event.target.value);
    setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  return (
    <form action="">
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button
          type="submit"
          onClick={function (event) {
            event.preventDefault();
            console.log(enteredTitle, enteredAmount, enteredData);
          }}
        >
          {" "}
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
