import ExpenseItem from "./ExpenseItem";

function ExpenseShow() {
  const expenses = [
    {
      id: `el1`,
      title: `Toilet Paper`,
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: `el2`,
      title: `Car Insurance`,
      amount: 295.12,
      date: new Date(2021, 1, 15),
    },
    {
      id: `el3`,
      title: `be calm`,
      amount: 124.12,
      date: new Date(2025, 2, 19),
    },
  ];

  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </>
  );
}

export default ExpenseShow;
