import React from "react";
import ExpenseForm from "./ExpenseForm";

function AddExpenseAccordian(props) {
  
  const {handleNameChange,
    handleAmountChange,
    handleDateChange,
    addNewExpenseHandler}=props;

    return (
    <div className="">
      <div className="accordion accordion-flush border border-4" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              + Add New Expenses
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ExpenseForm HandleNameChange={handleNameChange}
          HandleAmountChange={handleAmountChange}
          HandleDateChange={handleDateChange}
          AddNewExpenseHandler={addNewExpenseHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExpenseAccordian;
