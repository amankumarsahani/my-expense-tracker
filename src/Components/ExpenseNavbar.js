import React from "react";
import DropdownBtn from "./DropdownBtn";

function ExpenseNavbar(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-success mb-3">
      <div className="container">
        <span className="navbar-brand mb-0 h1">{`${props.year}: Expense Tracker `}</span>

        <DropdownBtn handleDropdownChange={props.handleDropdownChange}/>
      </div>
    </div>
  );
}

export default ExpenseNavbar;
