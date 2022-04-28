import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2020");
  // const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const HandleFilterYear = (year) => {
    setFilterYear(year);
  };
  const filtered = expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filterYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onFilterYear={HandleFilterYear}
        />
        <ExpensesChart expenses={filtered} />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  );
};

export default Expenses;
