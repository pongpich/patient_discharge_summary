import React, { Component } from 'react';

import * as reg_master_func from '../../../master/Religion';
import * as mrg_master_func from '../../../master/Marital-Status';

class Discharge_Summary_Ram_Detail extends React.Component {

  componentDidMount() {
  }

  splitDot = (xString) => {
    let split_string = xString.split(".");

    return split_string[0] + " ปี " + split_string[1] + " เดือน " + split_string[2] + " วัน " ;
  }

  genderInfo = (xGenger) => {
    let thai_gender = "";

    if (xGenger.trim() === "M") {
      thai_gender = "ชาย";
    }
    else if (xGenger.trim() === "F") {
      thai_gender = "หญิง";
    }

    return thai_gender;
  }

  genderInfoEng = (xGenger) => {
    let thai_gender = "";

    if (xGenger.trim() === "M") {
      thai_gender = "Male";
    }
    else if (xGenger.trim() === "F") {
      thai_gender = "Female";
    }

    return thai_gender;
  }

  render() {

    const { patient_discharge_summary_store, smart_ward_store, func } = this.props;

    return (
      <div>

        <div className="row margin-left-2px">
          <div className="col-6">
            <label className="font-14px font-weight-bold">Patient's Name:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.name}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
          <div className="col-3">
            <label className="font-14px font-weight-bold">HN:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.hn}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
          <div className="col-3">
            <label className="font-14px font-weight-bold">AN:</label>
            {
              patient_discharge_summary_store.patient_discharge_summary_info &&
              patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.OcmAdmNum}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
        </div>

        <div className="row margin-left-2px">
          <div className="col-2">
            <label className="font-14px font-weight-bold">No. of Admit:</label>
          </div>
          <div className="col-3">
            <label className="font-14px font-weight-bold">Date of Birth:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{func.date.slashDateBuddhist(info.birthDate)}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
          <div className="col-2">
            <label className="font-14px font-weight-bold">Age:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.age}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
          <div className="col-2">
            <label className="font-14px font-weight-bold">Sex:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{this.genderInfo(info.gender)}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
          <div className="col-3">
            <label className="font-14px font-weight-bold">Marital Status:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{mrg_master_func.getMaritalName(info.PBSMRGYON)}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
        </div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-14px font-weight-bold">Ethnic Group:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{reg_master_func.getReligionName(info.PBSPATREG)}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
          <div className="col">
            <label className="font-14px font-weight-bold">Person to be Notified:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.PBSPERNAM}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
          <div className="col">
            <label className="font-14px font-weight-bold">Telephone:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.PBSPHNNUM}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
        </div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-14px font-weight-bold">Patient's Address:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.sAddress}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
        </div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-14px font-weight-bold">Insurance:</label>
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="margin-left-10px font-14px">{info.insurance}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
        </div>

      </div>
    );
  }
}


export default Discharge_Summary_Ram_Detail;
