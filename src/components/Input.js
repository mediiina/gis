import React, { Component } from "react";
import SearchCountry from "./SearchCountry";
const countries = require("../assets/Countries");

class Input extends Component {
  state = {
    inputValue: "",
    selectedCountry: [],
    selectedCountryCode: "",
    inputSize: 0,
    groupOfCountries: "",
    tableSize: 0,
  };

  componentDidUpdate(previousProps, previousState) {
    const { inputValue, selectedCountryCode } = this.state;
    let data = [...countries.countries];
    let selectedCountry = "";
    let inputSize = 0;
    const country = this.state.selectedCountryCode;
    let groupOfCountries = "";
    let tableSize = 0;

    if (previousState.inputValue !== "" && inputValue === "") {
      this.resetInputState();
      this.props.handleResetState();
    }

    if (previousState.inputValue !== this.state.inputValue) {
      selectedCountry = data.filter((item) =>
        item.name.toUpperCase().includes(inputValue)
      );

      if (selectedCountry.length === 1) {
        inputSize = 2;
      } else if (selectedCountry.length > 5) {
        inputSize = 5;
      } else {
        inputSize = selectedCountry.length;
      }

      this.setState({
        selectedCountry,
        inputSize,
      });
    }

    if (previousState.inputValue.length > 1 && this.state.inputValue === "") {
      this.setState({
        inputValue: "",
        selectedCountry: [],
        selectedCountryCode: "",
        inputSize: 0,
      });
    }

    if (previousState.selectedCountryCode !== selectedCountryCode) {
      if (
        country === "DE" ||
        country === "ES" ||
        country === "FR" ||
        country === "PL" ||
        country === "GB"
      ) {
        groupOfCountries = "A";
        tableSize = 10;
      } else if (
        country === "BE" ||
        country === "HR" ||
        country === "CZ" ||
        country === "HU" ||
        country === "IE" ||
        country === "MK" ||
        country === "PT" ||
        country === "CH" ||
        country === "FI" ||
        country === "NL" ||
        country === "NO"
      ) {
        groupOfCountries = "B";
        tableSize = 5;
      } else {
        groupOfCountries = "C";
        tableSize = 1;
      }

      this.setState({
        groupOfCountries,
        tableSize,
      });

      this.props.onHandleInputValue2(tableSize, groupOfCountries);
    }
  }

  resetInputState = () => {
    this.setState({
      inputValue: "",
      selectedCountry: [],
      selectedCountryCode: "",
      inputSize: 0,
      groupOfCountries: "",
      tableSize: 0,
    });
  };

  handleChangeInput = (event) => {
    let inputValue = event.target.value.toUpperCase();

    this.setState({
      inputValue,
    });
  };

  handleSelectCountry = (event) => {
    let inputValue = event.target.value;
    let selectedCountryCode = event.target.id;

    this.setState({
      inputValue,
      selectedCountryCode,
    });

    this.props.onHandleInputValue(inputValue, selectedCountryCode);
  };

  render() {
    const { selectedCountry, inputSize, inputValue } = this.state;

    let searchCountry = selectedCountry.map((item) => (
      <SearchCountry key={item.id} id={item.code} name={item.name} />
    ));

    let showSelect = false;

    if (selectedCountry.length >= 1) {
      showSelect = true;
    }
    if (inputValue === "") {
      showSelect = false;
    }

    return (
      <>
        <input
          className="form-control form-control-lg mt-3 text-center"
          type="text"
          placeholder="Enter the name of the country"
          value={inputValue}
          onChange={this.handleChangeInput}
        />

        <div className="form-group mt-3">
          {showSelect && (
            <select
              className="custom-select custom-select-lg text-center"
              size={inputSize}
              onClick={this.handleSelectCountry}
            >
              {searchCountry}
            </select>
          )}
        </div>
      </>
    );
  }
}

export default Input;