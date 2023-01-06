import React, { useState } from "react";
import "./App.css";
import AddExpenseAccordian from "./Components/AddExpenseAccordian";
import ChartGraph from "./Components/Chart/Chart";
import ExpenseItem from "./Components/ExpenseItem";
import ExpenseNavbar from "./Components/ExpenseNavbar";

function App() {
  const dummyexpense = [
    { name: "Car", amount: "500", date: new Date(2023, 1, 1) },
    { name: "Bus", amount: "300", date: new Date(2023, 1, 1) },
    { name: "Ship", amount: "800", date: new Date(2023, 1, 1) },
    { name: "TV", amount: "500", date: new Date(2023, 1, 1) },
    { name: "Home", amount: "1000", date: new Date(2023, 1, 1) },
  ];
  const emptyExpense = {
    name: "",
    amount: "",
    date: "",
  };

  const [expenseData, setExpenseData] = useState(dummyexpense);
  const [currentExpense, setCurrentExpense] = useState(emptyExpense);
  const [filteryear, setFilterYear] = useState("2023");
  // const [filterExpenseData, setFilterExpenseData] = useState(dummyexpense);

  const handleDropdownChange = (e) => {
    console.log(e.target.value);
    setFilterYear(e.target.value);
  };

  const filterExpenseData = expenseData.filter((data) => {
    return data.date.getFullYear().toString() === filteryear;
  });
  console.log(filterExpenseData);

  const AddNewExpenseHandler = (event) => {
    event.preventDefault();
    currentExpense === emptyExpense
      ? setExpenseData((prevState) => [...prevState])
      : setExpenseData((prevState) => [currentExpense, ...prevState]);
  };

  const HandleNameChange = (e) => {
    e.target.value.length === 0
      ? console.log()
      : setCurrentExpense((prevState) => {
          return { ...prevState, name: e.target.value };
        });
  };
  const HandleAmountChange = (e) => {
    e.target.value.length === 0
      ? console.log()
      : setCurrentExpense((prevState) => {
          return { ...prevState, amount: e.target.value };
        });
    
  };
  const HandleDateChange = (e) => {
    e.target.value.length === 0
      ? console.log()
      : setCurrentExpense((prevState) => {
          return { ...prevState, date: new Date(e.target.value) };
        });
  };

  const DataAmount=filterExpenseData.map((exp)=>{return exp.amount});
  // console.log(DataAmount);

  return (
    <div className="App">
      <ExpenseNavbar
        handleDropdownChange={handleDropdownChange}
        year={filteryear}
      />
      
      <div className="container">
        <AddExpenseAccordian
          handleNameChange={HandleNameChange}
          handleAmountChange={HandleAmountChange}
          handleDateChange={HandleDateChange}
          addNewExpenseHandler={AddNewExpenseHandler}
        />
        <ChartGraph data={DataAmount}/>

        {filterExpenseData.length === 0 ? (
          <p className="text-center h5 mt-3">{`No Expense Data in ${filteryear} Found.`}</p>
        ) : (

            filterExpenseData.map((item) => (
              <ExpenseItem
                key={Math.random()}
                date={item.date}
                itemName={item.name}
                itemAmount={item.amount}
              />
            ))

        )}
      </div>
    </div>
  );
}

export default App;
