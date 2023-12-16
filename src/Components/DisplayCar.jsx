import React from 'react';

const DisplayCar = ({ ele }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Car-Name</th>
            <th>Car-Model</th>
            <th>Car-Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ele.carName}</td>
            <td>{ele.carModel}</td>
            <td>{ele.quantity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCar;
