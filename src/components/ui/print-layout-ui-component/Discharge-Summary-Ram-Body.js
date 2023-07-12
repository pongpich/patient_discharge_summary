import React, { Component } from 'react';

class Discharge_Summary_Ram_Body extends React.Component {

  componentDidMount() {
  }

  render() {

    const { patient_discharge_summary_store, func } = this.props;

    let significant = {};
    let surgery_and_procedure = {};
    let treatment = {};
    let treatment_801 = {};
    let operation = {};
    let investigation = {};

    if (patient_discharge_summary_store.patient_discharge_summary &&
    patient_discharge_summary_store.patient_discharge_summary.result.length > 0) {
      patient_discharge_summary_store.patient_discharge_summary.result.map( (result, index) => {

        if (result.code.trim() === "DSC00601") {
          significant = result;
        }
        else if (result.code.trim() === "DSC00701") {
          surgery_and_procedure = result;
        }
        else if (result.code.trim() === "DSC00801") {
          treatment_801 = result;
        }
        else if (result.code.trim() === "DSC00401") {
          treatment = result;
        }
        else if (result.code.trim() === "DSC00402") {
          operation = result;
        }
        else if (result.code.trim() === "DSC00403") {
          investigation = result;
        }

      });
    }

    return (
      <div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-18px font-weight-bold">Diagnosis :</label>
            {
              patient_discharge_summary_store.patient_ICD_list &&
              patient_discharge_summary_store.patient_ICD_list.result.length > 0 ?
              (
                <div className="div-width-100p margin-left-10px font-14px">
                  {patient_discharge_summary_store.patient_ICD_list.result[0].Disease}
                </div>
              )
              :
              (
                <label className="div-width-100p margin-left-10px div-height-15px"></label>
              )
            }

          </div>
        </div>

        <div className="div-height-20px"></div>
        <div className="border-bottom-solid-black-1p5"></div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-18px font-weight-bold">Significant Findings & Lab :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              significant ?
              (
                <div className="div-width-100p margin-left-10px font-14px">
                  {significant.textValue}
                </div>
              )
              :
              (
                <label className="div-width-100p margin-left-10px div-height-15px"></label>
              )
            }
          </div>
        </div>

        <div className="div-height-20px"></div>
        <div className="border-bottom-solid-black-1p5"></div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-18px font-weight-bold">Surgery / Procedure:</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              operation && investigation ?
              (
                <div className="div-width-100p margin-left-10px font-14px">
                  <div className="">
                    {surgery_and_procedure.textValue}
                  </div>
                  <div className="">
                    {operation.textValue}
                  </div>
                  <div className="">
                    {investigation.textValue}
                  </div>
                </div>
              )
              :
              (
                <label className="div-width-100p margin-left-10px div-height-15px"></label>
              )
            }
          </div>
        </div>

        <div className="div-height-20px"></div>
        <div className="border-bottom-solid-black-1p5"></div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-18px font-weight-bold">Treatment :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              treatment ?
              (
                <div className="div-width-100p margin-left-10px font-14px">
                  <div className="">
                    {treatment_801.textValue}
                  </div>
                  <div className="">
                    {treatment.textValue}
                  </div>
                </div>
              )
              :
              (
                <label className="div-width-100p margin-left-10px div-height-15px"></label>
              )
            }
          </div>
        </div>

        <div className="div-height-20px"></div>

      </div>
    );
  }
}


export default Discharge_Summary_Ram_Body;
