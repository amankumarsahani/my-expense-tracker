import React from "react";

function ExpenseDate(props) {
  const {date}=props;
  return (
    <div>
      <div>{date.length!==0?date.toLocaleString("en-US", { day: "2-digit" }):null}</div>
      <div>{date.length!==0?date.toLocaleString("en-US", { month: "long" }):null}</div>
      <div>{date.length!==0?date.getFullYear():null}</div>
    </div>
  );
}

export default ExpenseDate;
