import React, { useState } from "react";
import "./Add_Details.css";
import axios from "axios";
export default function Add_Details() {
  const [details, setDetails] = useState({
    holderName: "",
    bank: "",
    accNumber: "",
    confirmAccNum: "",
    ifscCode: "",
    branchName: "",
  });
  const inputFile = React.createRef("");
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const addDetails = () => {
    axios.post(
      `https://62024b29b8735d00174cb98f.mockapi.io/Bank_Details`,
      details
    );
  };
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="title">ADD BANK ACCOUNT DETAILS</div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter Account Holder Name"
              name="holderName"
              value={details.holderName}
              onChange={handleChange}
            />
            <br />
            <select
              name="bank"
              id="bank"
              value={details.bank}
              onChange={handleChange}
            >
              <option value="select">--- SELECT BANK ---</option>
              <option value="sbi">State Bank Of India</option>
              <option value="bob">Bank Of Baroda</option>
              <option value="boi">Bank of India</option>
              <option value="axis">AXIS Bank</option>
              <option value="hdfc">HDFC Bank</option>
              <option value="icici">ICICI Bank</option>
            </select>
            <br />
            <input
              type="number"
              name="accNumber"
              placeholder="Enter A/C Number"
              value={details.accNumber}
              onChange={handleChange}
            />
            <br />
            <input
              type="number"
              name="confirmAccNum"
              placeholder="Enter Confirm A/C Number"
              value={details.confirmAccNum}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="ifscCode"
              placeholder="Enter IFSC Code"
              value={details.ifscCode}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="branchName"
              placeholder="Enter Branch Name"
              value={details.branchName}
              onChange={handleChange}
            />
            <br />
            <label>You Have a PanCard Or Not ❓</label>
            <div className="pancard_details">
              <input
                type="radio"
                id="yes"
                name="PanCard"
                className="input"
                value="YES"
                onChange={handleChange}
              />
              <label>YES</label>
              <input
                type="radio"
                id="no"
                name="PanCard"
                className="input"
                value="NO"
                onChange={handleChange}
              />
              <label>NO</label>
              <input
                type="radio"
                id="inprocess"
                name="PanCard"
                className="input"
                value="InProcess"
                onChange={handleChange}
              />
              <label>INPROCESS</label>
            </div>
            <br />
            <label>Upload a Photo for Account Holder</label>
            <div className="photo">
              <input
                type="file"
                name="photo"
                required
                accept="image/*"
                ref={inputFile}
                onChange={handleChange}
              ></input>
            </div>
            <button type="submit" onClick={addDetails}>
              ADD DETAILS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
