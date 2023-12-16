import React, { useState } from "react";
import DisplayCar from "./DisplayCar";

export const AddCarDetails = () => {
  const [state, setState] = useState({
    carName: "",
    carModel: "",
    quantity: "",
    carList: [],
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const obj = {
      carName: state.carName,
      carModel: state.carModel,
      quantity: state.quantity,
    };
    // console.log(obj);

    let updatedCarList = [];
    var flag = false;
    state.carList.forEach((item) => {
      if (item.carName == state.carName && item.carModel == state.carModel) {
        var newObj = {
          ...item,
          quantity: Number(item.quantity) + Number(state.quantity),
        };
        flag = true;
        updatedCarList.push(newObj);
      } else {
        updatedCarList.push(item);
      }
    });
    if (flag) {
      setState({ ...state, carList: updatedCarList });
    } else {
      setState({ ...state, carList: [updatedCarList, obj] });
    }
  };

  console.log(state, "check for input fields of form");

  return (
    <>
      <div>AddCarDetails</div>

      <form>
        <label>Car Name:</label>
        <input
          type="text"
          name="carName"
          value={state.carName}
          onChange={handleInput}
        ></input>

        <label>Car Model:</label>
        <input
          type="text"
          name="carModel"
          value={state.carModel}
          onChange={handleInput}
        ></input>

        <label>Quantity:</label>
        <input
          type="Number"
          name="quantity"
          value={state.quantity}
          onChange={handleInput}
        ></input>

        <button onClick={handleFormSubmit}>Add Button</button>
      </form>

      {state.carList.map((ele) => {
        return <DisplayCar ele={ele} />;
      })}
    </>
  );
};
