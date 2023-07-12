import React, { Component } from 'react';

class Discharge_SUmmary_Note_Detail extends React.Component {

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

  render() {

    const { patient_discharge_summary_store, smart_ward_store, func } = this.props;

    return (
      <div>

        <div className="row">
          <div className="col-2 border-solid-black-1p5">
            <label className="font-18px font-weight-bold">แพ้ยา :</label>
          </div>
          <div className="col-10 border-solid-black-1p5">
            {
              smart_ward_store.patient_info &&
              smart_ward_store.patient_info.result.length > 0 ?
                smart_ward_store.patient_info.result.map( (info, info_index) =>
                <label key={info_index} className="font-14px">{info.allergy}</label>
              )
              :
              (
                <label className=""></label>
              )
            }
          </div>
        </div>

        <div className="row">

          <div className="col border-solid-black-1p5">
            <div className="row">
              <div className="col">
                <label className="font-14px font-weight-bold">Admission Date :</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{func.date.slashDateBuddhist(info.OcmAcpDtm)}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
              <div className="col">
                <label className="font-14px font-weight-bold">Time :</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{func.time.colonTimeDateChrist(info.OcmAcpDtm)}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label className="font-14px font-weight-bold">HN.</label>
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
              <div className="col">
                <label className="font-14px font-weight-bold">AN.</label>
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

            <div className="row">
              <div className="col">
                <label className="font-14px font-weight-bold">เลขที่</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px"></label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
              <div className="col">
                <label className="font-14px font-weight-bold">DOB</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px"></label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
            </div>

            <div className="row border-bottom-solid-black-1p5">
              <div className="col">
                <label className="font-14px font-weight-bold">คู่สัญญา</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px"></label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
            </div>

            <div className="row">
              <div className="col-4 border-right-solid-black-1p5">
                <h5 className="font-center">หมายเหตุ</h5>
              </div>
              <div className="col-8">
                <h5 className="font-center"></h5>
              </div>
            </div>
          </div>

          <div className="col border-solid-black-1p5">
            <div className="row">
              <div className="col-5">
                <label className="font-14px font-weight-bold">D/C Date:</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{func.date.slashDateBuddhist(info.OcmLevDtm)}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
              <div className="col-3">
                <label className="font-14px font-weight-bold">Time:</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{func.time.colonTimeDateChrist(info.OcmLevDtm)}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
              <div className="col-4">
                <label className="font-14px font-weight-bold">LOS</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{info.OcmLevDtm.substring(0, 8)-info.OcmAcpDtm.substring(0, 8)}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label className="font-14px font-weight-bold">ชื่อ</label>
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
            </div>

            <div className="row">
              <div className="col">
                <label className="font-14px font-weight-bold">อายุ</label>
                {
                  smart_ward_store.patient_info &&
                  smart_ward_store.patient_info.result.length > 0 ?
                    smart_ward_store.patient_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{this.splitDot(info.age)}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
              <div className="col">
                <label className="font-14px font-weight-bold">เพศ</label>
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
            </div>

            <div className="row border-bottom-solid-black-1p5">
              <div className="col">
                <label className="font-14px font-weight-bold">Ward:</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{info.OcmWrdCod}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
              <div className="col">
                <label className="font-14px font-weight-bold">Room:</label>
                {
                  patient_discharge_summary_store.patient_discharge_summary_info &&
                  patient_discharge_summary_store.patient_discharge_summary_info.result.length > 0 ?
                    patient_discharge_summary_store.patient_discharge_summary_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{info.OcmRomCod.trim()+"/"+info.OcmBedCod.trim()}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
            </div>

            <div className="row">
              <div className="col-7 border-right-solid-black-1p5">
                <h5 className="font-center">D/C SUMMARY</h5>
              </div>
              <div className="col-3 border-right-solid-black-1p5">
                <h5 className="font-center">แผ่นที่</h5>
              </div>
              <div className="col-2">
                <h5 className="font-center">1</h5>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}


export default Discharge_SUmmary_Note_Detail;
