import React, { Component } from "react";
import Input from "./Input";
import ListOfTheCityPollution from "./ListOfTheCityPollution";

class Search extends Component {
  state = {
    selectedCountry: "",
    selectedCountryCode: "",
    informationAboutPollution: [],
    cityPollutionArray: [],
    topCityPollutionList: [],
    tableSize: 0,
    groupOfCountries: "",

    show_listOfTheCityPollution: false,
    show_searchButtonDisabled: true,
    show_LoadingDataButton: false,
    show_searchButton: false,
    buttonClicked: false,
    downloadedData: false,
    dataPollutionReady: false,
    dataCityReady: false,
    resetState: false,
  };

  componentDidUpdate(previousProps, previousState) {
    const {
      informationAboutPollution,
      dataPollutionReady,
      downloadedData,
      resetState,
      selectedCountry,
      selectedCountryCode,
    } = this.state;

    if (
      selectedCountry !== "" &&
      previousState.selectedCountryCode !== this.state.selectedCountryCode
    ) {
      this.setState({
        show_searchButtonDisabled: false,
        show_searchButton: true,
      });
    }

    if (
      selectedCountry === "" &&
      selectedCountryCode === "" &&
      previousState.selectedCountry !== ""
    ) {
      this.setState({
        show_searchButtonDisabled: true,
        show_searchButton: false,
      });
    }

    if (previousState.selectedCountry !== this.state.selectedCountry) {
      this.resetState2();
    }

    if (resetState) {
      this.resetState();
      this.hideTable();
    }

    if (informationAboutPollution.length > 1) {
      this.createCityPollutionArray();
    }

    if (downloadedData && dataPollutionReady) {
      setTimeout(() => {
        this.setState({
          show_listOfTheCityPollution: true,
        });
      }, 10);
    }

    if (dataPollutionReady) {
      setTimeout(() => {
        this.changeButtonStatus2();
        this.setState({
          dataPollutionReady: false,
          buttonClicked: false,
        });
      }, 10);
    }
  }

  hideTable = () => {
    this.setState({
      show_listOfTheCityPollution: false,
    });
  };

  handleResetState = () => {
    this.setState({
      resetState: true,
    });
  };

  handleInputValue = (inputValue, selectedCountryCode) => {
    this.setState({
      selectedCountry: inputValue,
      selectedCountryCode,
    });
  };

  onHandleInputValue2 = (tableSize, groupOfCountries) => {
    this.setState({
      groupOfCountries,
      tableSize,
    });
  };

  changeButtonStatus = () => {
    this.setState({
      show_LoadingDataButton: true,
      show_searchButton: false,
    });
  };

  changeButtonStatus2 = () => {
    this.setState({
      show_LoadingDataButton: false,
      show_searchButton: true,
    });
  };

  buttonClicked = () => {
    this.setState({
      buttonClicked: true,
    });
  };

  resetState = () => {
    this.setState({
      selectedCountry: "",
      selectedCountryCode: "",
      informationAboutPollution: [],
      cityPollutionArray: [],
      topCityPollutionList: [],
      tableSize: 0,
      groupOfCountries: "",

      show_listOfTheCityPollution: true,
      show_LoadingDataButton: false,
      show_searchButton: true,
      buttonClicked: false,
      downloadedData: false,
      dataPollutionReady: false,
      dataCityReady: false,
      resetState: false,
    });
  };

  resetState2 = () => {
    this.setState({
      informationAboutPollution: [],
      cityPollutionArray: [],
      topCityPollutionList: [],
      show_listOfTheCityPollution: false,
    });
  };

  downloadInformationAboutPollution = () => {
    const country = this.state.selectedCountryCode;
    let groupOfCountries = this.state.groupOfCountries;
    let API = ``;

    if (groupOfCountries === "A") {
      API = `https://api.openaq.org/v1/measurements?country=${country}&limit=2500`;
    } else if (groupOfCountries === "B") {
      API = `https://api.openaq.org/v1/measurements?country=${country}&limit=1500`;
    } else {
      API = `https://api.openaq.org/v1/measurements?country=${country}&limit=1000`;
    }

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .catch((error) =>
        alert(
          `\n Easy, it's just a error \n  Error number ${error} \n Refresh the page `
        )
      )
      .then((response) => response.json())
      .then((data) => {
        let informationAboutPollution = data.results;

        if (informationAboutPollution.length > 1) {
          this.setState({
            informationAboutPollution,
            downloadedData: true,
          });
        }
      });
  };

  createCityPollutionArray = () => {
    let data = this.state.informationAboutPollution;
    let selectedCountryCode = this.state.selectedCountryCode;
    let downloadedData = this.state.downloadedData;
    let informationAboutPollution = [...data];
    let topCityPollutionList = [];
    let cityPollutionArray = [];
    let size = this.state.tableSize;

    if (informationAboutPollution && downloadedData) {
      topCityPollutionList = informationAboutPollution
        .filter((item) => item.parameter === "no2")
        .sort(function (a, b) {
          return b.value - a.value;
        })
        .map((item) => item.city);

      let citycity = [...topCityPollutionList];
      let uniqueListOfCities = new Set();
      for (let i = 0; i < citycity.length; i++) {
        uniqueListOfCities.add(citycity[i]);
      }
      let newrray = [...uniqueListOfCities].splice(0, size);
      topCityPollutionList = newrray;
    }
    if (
      selectedCountryCode === "SI" ||
      selectedCountryCode === "HR" ||
      selectedCountryCode === "IE"
    ) {
      topCityPollutionList = informationAboutPollution
        .filter((item) => item.parameter === "pm10")
        .sort(function (a, b) {
          return b.value - a.value;
        })
        .map((item) => item.city);

      let citycity = [...topCityPollutionList];
      let uniqueListOfCities = new Set();
      for (let i = 0; i < citycity.length; i++) {
        uniqueListOfCities.add(citycity[i]);
      }
      let newrray = [...uniqueListOfCities].splice(0, size);
      topCityPollutionList = newrray;
    }

    for (let i = 0; i < size; i++) {
      let result = informationAboutPollution.filter(
        (item) => item.city === topCityPollutionList[i]
      );
      cityPollutionArray.push(result);
    }

    setTimeout(() => {
      if (
        this.state.cityPollutionArray.length === 0 &&
        this.state.informationAboutPollution.length !== 0
      ) {
        this.setState({
          cityPollutionArray,
          topCityPollutionList,
          dataPollutionReady: true,
        });
      }
    }, 500);
  };

  handleButton = () => {
    this.buttonClicked();

    this.changeButtonStatus();

    this.downloadInformationAboutPollution();
  };

  render() {
    const {
      show_LoadingDataButton,
      show_searchButton,
      show_searchButtonDisabled,
      selectedCountry,
      selectedCountryCode,
      show_listOfTheCityPollution,
      tableSize,
    } = this.state;

    let show_noCountryInfo = false;
    if (selectedCountry !== "" && selectedCountryCode === "") {
      show_noCountryInfo = true;
    } else {
      show_noCountryInfo = false;
    }

    return (
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-10">
            <h1 className="mt-5 mb-4 text-center">
              Air quality in Europe
            </h1>
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-5">
            <Input
              onHandleInputValue={this.handleInputValue}
              onHandleInputValue2={this.onHandleInputValue2}
              handleResetState={this.handleResetState}
            />
          </div>
          <div className="col-5">
            {show_searchButton && (
              <button
                type="button"
                className="btn btn-outline-light btn-lg btn-block mt-3"
                onClick={this.handleButton}
              >
                Search
              </button>
            )}

            {show_searchButtonDisabled && (
              <button
                type="button"
                className="btn btn-outline-light btn-lg btn-block mt-3"
                disabled
              >
                Search
              </button>
            )}

            {show_LoadingDataButton && (
              <button
                className="btn btn-outline-light btn-lg btn-block mt-3"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm mb-1"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span> Loading data...</span>
              </button>
            )}
          </div>
        </div>

        <div className="row justify-content-around">
          {show_noCountryInfo && (
            <h5 className="mt-5">
              No data for this country. Please choose other.
            </h5>
          )}
        </div>

        <div className="row mt-4">
          {show_listOfTheCityPollution && (
            <ListOfTheCityPollution
              data={this.state.cityPollutionArray}
              tableSize={tableSize}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;