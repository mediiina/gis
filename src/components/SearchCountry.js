import React from "react";

const SearchCountry = (props) => {
  return (
    <option value={props.name} id={props.id}>
      {props.name}
    </option>
  );
};

export default SearchCountry;