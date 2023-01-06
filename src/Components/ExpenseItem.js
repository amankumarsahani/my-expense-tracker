import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const handleDeleteClick=()=>{console.log()}
  return (
    <div className="container border border-3 my-2">
      <div className="row align-self-center align-items-center justify-content-center text-center m-2 exp-container">
        <div className="col-2">
          <ExpenseDate date={props.date} />
        </div>
        <div className="col-4">{props.itemName}</div>
        <div className="col-4">{props.itemAmount}</div>
        <div className="col-2">
        <button className="btn btn-success disabled my-1 mx-1">Update</button>
          <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
