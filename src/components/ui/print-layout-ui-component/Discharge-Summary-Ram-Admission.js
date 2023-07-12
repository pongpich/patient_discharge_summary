import React, { Component } from 'react';

class Discharge_Summary_Ram_Admission extends React.Component {

  componentDidMount() {
  }

  render() {

    const { patient_discharge_summary_store, smart_ward_store, func } = this.props;

    return (
      <div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-14px font-weight-bold">Date / Time of Admission:</label>
            {
              patient_discharge_summary_store.patient_discharge_summary_info &&
              patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{func.date.slashDateBuddhist(info.OcmAcpDtm)}</label>
              )
              :
              (
                <label className="margin-left-10px div-height-15px"></label>
              )
            }
          </div>
          <div className="col">
            <label className="font-14px font-weight-bold">Date / Time of Discharge:</label>
            {
              patient_discharge_summary_store.patient_discharge_summary_info &&
              patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{func.date.slashDateBuddhist(info.OcmLevDtm)}</label>
              )
              :
              (
                <label className="margin-left-10px div-height-15px"></label>
              )
            }
          </div>
        </div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-14px font-weight-bold">Length of Stay:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.admittionToDate}</label>
              )
              :
              (
                <label className="margin-left-10px div-height-15px"></label>
              )
            }
            <label className="position-relative relation-left-5p font-14px font-weight-bold">Day</label>
          </div>
          <div className="col">
            <label className="font-14px font-weight-bold">Department:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.departmentName}</label>
              )
              :
              (
                <label className="margin-left-10px div-height-15px"></label>
              )
            }
          </div>
          <div className="col">
            <label className="font-14px font-weight-bold">Ward/Room:</label>
            {
              patient_discharge_summary_store.patient_discharge_summary_info &&
              patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">
                  {info.OcmWrdCod}-
                  {info.OcmRomCod}-
                  {info.OcmBedCod}
                </label>
              )
              :
              (
                <label className="margin-left-10px div-height-15px"></label>
              )
            }
          </div>
        </div>

      </div>
    );
  }
}


export default Discharge_Summary_Ram_Admission;
