import "./ExpensesFilter.css";
const ExpensesFilter = ({ onFilterYear, filterYear }) => {
  const handleSelect = (e) => {
    onFilterYear(e.target[e.target.selectedIndex].value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filterYear} onChange={handleSelect}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
