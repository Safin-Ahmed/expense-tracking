import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (e) => {
    // setForm({ ...form, title: e.target.value }); (This is not the right way)
    setForm((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setForm({ ...form, amount: e.target.value });
  };
  const dateChangeHandler = (e) => {
    setForm({ ...form, date: new Date(e.target.value) });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpenseData(form);
    setForm({
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={form.title} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={form.amount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={form.date}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
