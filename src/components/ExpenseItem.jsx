import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <>
      <Card className="expense-item">
        <div className="expense-item_description">
          <h2>{title}</h2>
          <ExpenseDate date={props.date}></ExpenseDate>
          <div className="expence-item_price">$ {props.amount}</div>
        </div>
        <button
          onClick={function () {
            // console.log(`do smth`);
            setTitle(`updated`);
          }}
        >
          Change Title
        </button>
      </Card>
    </>
  );
}

export default ExpenseItem;
