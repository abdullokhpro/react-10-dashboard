import React from "react";
import useFetch from "../../../hooks/useFetch";
import "./manageProducts.scss";
import Header from "../../../compnents/header/Header";

const ManageProducts = () => {
  let { data, error } = useFetch("/products");
  console.log(data);

  let tableData = data?.products.map((el) => (
    <tr key={el.id}>
      <td className="table__data table__img">
        <img src={el.images[0]} alt="" />
        <span>{el.brand}</span>
      </td>
      <td className="table__data">{el.stock}</td>
      <td className="table__data table__green">{el.rating}</td>
      <td className="table__data table__red">{el.title}</td>
      <td className="table__data">603 555-0123</td>
    </tr>
  ));

  return (
    <>
      <div className="container">
        <table className="table">
          <thead className="table__head">
            <tr className="table__row">
              <td className="table__data">Owner</td>
              <td className="table__data">End date</td>
              <td className="table__data">Profits</td>
              <td className="table__data">Losses</td>
              <td className="table__data">Phone</td>
            </tr>
          </thead>

          <tbody className="table__body">{tableData}</tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProducts;
