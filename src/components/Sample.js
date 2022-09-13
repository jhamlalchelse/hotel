import React, { useEffect, useState } from "react";
const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)



const validation = ({ error, ...rest }) => {
  let checkValidation = false;

  Object.values(error).forEach(val => {
      if (val.length > 0) {
          checkValidation = false
      } else {
          checkValidation = true
      }
  });

  Object.values(rest).forEach(val => {
      if (val === null) {
          checkValidation = false
      } else {
          checkValidation = true
      }
  });

  return checkValidation;
};

export default function Sample() {
  
  const [roomDetail, setroomDetails] = useState([]);
  useEffect(() => {
    setroomDetails([
      { id: 1, fieldName: "Name", type: "input", addl_inputs: "max 50 chars" },
      {
        id: 2,
        fieldName: "email Id",
        type: "input",
        addl_inputs: "validate format",
      },
      {
        id: 3,
        fieldName: "Room Type",
        type: "dropDown",
        values: ["Standard", "Private", "Dorm"],
      },
      {
        id: 4,
        fieldName: "Number of Guests",
        type: "Number",
        addl_inputs: "minimum 2",
      },
      { id: 5, fieldName: "Check in Date", type: "Calendar" },
    ]);
    // fetch('https://apis-react-training.herokuapp.com/getFormDetails')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(erroe => console.log("Catched Error is " + erroe));
    // fetch("https://apis-react-training.herokuapp.com/getFormDetails")
    //   .then((response) => {
    //     if (response.status === 200 || response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error(`HTTP error status: ${response.status}`);
    //     }
    //   })
    //   .then((json) => {
    //     console.log(json);
    //   });
  }, []);
  return (
    <div className="container">
      <div className="card mt-5">
        <form className="card-body">
          <div className="form-group mb-3">
            <label className="mb-2">
              <strong>Name</strong>
            </label>
            <input type="text" className="form-control" />
            <small className="text-danger">Error section</small>
          </div>
          <div className="form-group mb-3">
            <label className="mb-2">
              <strong>Email</strong>
            </label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <label className="mb-2">
              <strong>Password</strong>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-block btn-primary">
              Submit
            </button>
          </div>
          {roomDetail.map((item, index) => (
          <textarea>{item.fieldName}</textarea>
          ))}
          
        </form>
      </div>
    </div>
  );
}
