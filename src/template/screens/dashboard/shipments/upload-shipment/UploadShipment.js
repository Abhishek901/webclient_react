import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import UploadXLX from "../../../../components/upload/Upload";
export default class UploadShipment extends Component {
  constructor(props) {
    super(props);
  }
  loadSuccessCSV = (file) => {
    console.log(file);
  };
  handleErrorCSV(err) {
    console.log(err);
  }
  handleFilesXLX = (files) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      // Use reader.result
      alert(reader.result);
    };
    reader.readAsText(files[0]);
  };
  render() {
    return (
      <div className="main_wapper">
        {/* <CSVReader
          cssClass="csv-reader-input"
          label="Select CSV with secret Death Star statistics"
          onFileLoaded={this.loadSuccessCSV}
          onError={this.handleErrorCSV}
          inputId="ObiWan"
          inputStyle={{ color: "red" }}
        /> */}
        {/* <ReactFileReader handleFiles={this.handleFilesXLX} fileTypes={".csv"}>
          <button className="btn">Upload</button>
        </ReactFileReader> */}
        <UploadXLX></UploadXLX>
      </div>
    );
  }
}
