import React from "react";
function DropdownBtn(props) {
  
  return (
    <div>
      <select id="dropdown" className="btn btn-danger " onChange={props.handleDropdownChange}>
        {/* <option value={filteryear}>{filteryear}</option> */}
        <option value="2023" className="">2023</option>
        <option value="2022" className="">2022</option>
        <option value="2021" className="">2021</option>
        <option value="2020" className="">2020</option>
      </select>
    </div>
  );
}

export default DropdownBtn;
