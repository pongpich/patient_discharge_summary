import React, { Component } from 'react';

class Discharge_Summary_Ram_Reason extends React.Component {

  constructor() {
    super();

    this.state = {
      checkbox_active: true,
      checkbox_inactive: false
    };
  }

  componentDidMount() {
  }

  render() {

    const { patient_discharge_summary_store, func } = this.props;

    let treatment = {};
    let operation = {};
    let investigation = {};
    let other = {};

    if (patient_discharge_summary_store.patient_discharge_summary &&
    patient_discharge_summary_store.patient_discharge_summary.result.length > 0) {
      patient_discharge_summary_store.patient_discharge_summary.result.map( (result, index) => {

        if (result.code.trim() === "DSC00401") {
          treatment = result;
        }
        else if (result.code.trim() === "DSC00402") {
          operation = result;
        }
        else if (result.code.trim() === "DSC00403") {
          investigation = result;
        }
        else if (result.code.trim() === "DSC00404") {
          other = result;
        }

      });
    }

    return (
      <div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-18px font-weight-bold">Reason for Admission:</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              treatment.codeValue === "Y" ?
              (
                <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
              )
              :
              (
                <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
              )
            }
            <label className="margin-left-10px font-18px">Treatment</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              operation.codeValue === "Y" ?
              (
                <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
              )
              :
              (
                <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
              )
            }
            <label className="margin-left-10px font-18px">Operation</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              investigation.codeValue === "Y" ?
              (
                <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
              )
              :
              (
                <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
              )
            }
            <label className="margin-left-10px font-18px">Investigation</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              other.codeValue === "Y" ?
              (
                <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
              )
              :
              (
                <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
              )
            }
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              other.codeValue === "Y" ?
              (
                <label className="margin-left-10px font-18px">Other: {other.textValue}</label>
              )
              :
              (
                <label className="margin-left-10px font-18px">Other ......................................................</label>
              )
            }
          </div>
        </div>

      </div>
    );
  }
}


export default Discharge_Summary_Ram_Reason;
