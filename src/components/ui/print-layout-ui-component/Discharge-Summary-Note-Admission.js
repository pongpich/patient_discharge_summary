import React, { Component } from 'react';

class Discharge_SUmmary_Note_Admission extends React.Component {

  componentDidMount() {
  }

  render() {

    const { patient_discharge_summary_store, func } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col">
            <label className="font-18px font-weight-bold">Admission date :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary_info &&
              patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                <label key={info_index} className="div-width-50p margin-left-10px font-14px">{func.date.slashDateBuddhist(info.OcmAcpDtm)}</label>
              )
              :
              (
                <label className="div-width-50p margin-left-10px div-height-15px"></label>
              )
            }
          </div>
          <div className="col">
            <label className="font-18px font-weight-bold">Discharge date :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary_info &&
              patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                <label key={info_index} className="div-width-25p margin-left-10px font-14px">{func.date.slashDateBuddhist(info.OcmLevDtm)}</label>
              )
              :
              (
                <label className="div-width-25p margin-left-10px div-height-15px"></label>
              )
            }

            <label className="font-18px font-weight-bold">AN :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary_info &&
              patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                <label key={info_index} className="div-width-25p margin-left-10px font-14px">{info.OcmAdmNum}</label>
              )
              :
              (
                <label className="div-width-25p margin-left-10px div-height-15px"></label>
              )
            }

          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="font-18px font-weight-bold">Diagnosis :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary.result.map( (discharge, discharge_index) =>
                <div key={discharge_index} className="div-width-100p margin-left-10px font-14px">
                  {discharge.IdsPriDia}
                </div>
              )
              :
              (
                <label className="div-width-100p margin-left-10px div-height-15px"></label>
              )
            }
          </div>
          <div className="col">
            <label className="font-18px font-weight-bold">Treatment :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary.result.map( (discharge, discharge_index) =>
                <div key={discharge_index} className="div-width-100p margin-left-10px font-14px">
                  {discharge.IdsNonOpr}
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

        <div className="row">
          <div className="col">
            <label className="font-18px font-weight-bold">LAB :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary.result.map( (discharge, discharge_index) =>
                <div key={discharge_index} className="div-width-100p margin-left-10px font-14px">
                  &nbsp;
                </div>
              )
              :
              (
                <label className="div-width-100p margin-left-10px div-height-15px"></label>
              )
            }
          </div>
          <div className="col">
            <label className="font-18px font-weight-bold">Result/complication :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary.result.map( (discharge, discharge_index) =>
                <div key={discharge_index} className="div-width-100p margin-left-10px font-14px">
                  {discharge.IdsComPli}
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

        <div className="row">
          <div className="col">
          </div>
          <div className="col">
          <label className="font-18px font-weight-bold">F/U & Plan :</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary.result.map( (discharge, discharge_index) =>
                <div key={discharge_index} className="div-width-100p margin-left-10px font-14px">
                  {discharge.IdsExtCau}
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


export default Discharge_SUmmary_Note_Admission;
