import React from "react";

function ExpenseForm(props) {
  const {HandleNameChange,
    HandleAmountChange,
    HandleDateChange,
    AddNewExpenseHandler}=props;

  return (
    <div className="container my-3 d-flex align-items-center w-50 align-self-center justify-content-center">
      <form
        className="border border-2 p-3 shadow-md"
        onSubmit={AddNewExpenseHandler}
      >
        <p className="text-center h4 mb-3">Add New Expense</p>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Purchases Item"
            aria-label="Purchases Item"
            onChange={HandleNameChange}
          />
        </div>

        <div className="input-group mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            aria-label="Amount"
            onChange={HandleAmountChange}
          />
        </div>
        <div className="input-group mb-2">
          <input
            type="date"
            className="form-control"
            placeholder="Purchase Date"
            aria-label="Purchase Date"
            min={"2020-01-01"}
            max={"2023-12-31"}
            onChange={HandleDateChange}
          />
        </div>
        <div className="d-flex">
        <button type="submit" className="btn my-2 btn-success btn-sm w-100 m-1">ADD</button>
        <button type="reset" className="btn my-2 btn-success btn-sm w-100 m-1">CLEAR</button></div>
      </form>
    </div>
  );
}

export default ExpenseForm;
