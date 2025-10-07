import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import React, {useState} from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    return (
        <li>
            <Card className="expense-item">
                <div className="expense-item_description">
                    <h2>{title}</h2>
                    <ExpenseDate date={props.date}></ExpenseDate>
                    <div className="expence-item_price">$ {props.amount}</div>
                </div>
                <div className="expense-item-btn-wrapper">
                <button
                    onClick={function () {
                        // console.log(`do smth`);
                        setTitle(`updated`);
                    }}
                >
                    Change Title
                </button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
