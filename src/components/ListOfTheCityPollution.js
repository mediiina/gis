import React from "react";
import Table from "./Table";

const ListOfTheCityPollution = (props) => {
  let cityPollutionArray = props.data;
  let tableSize = props.tableSize;

  return (
    <div className="container mt-5">
      <Table data={cityPollutionArray} tableSize={tableSize} />
    </div>
  );
};

export default ListOfTheCityPollution;