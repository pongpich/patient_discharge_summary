import React, { Component } from 'react';

class Discharge_Summary_Ram_Footer extends React.Component {

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

    const { patient_discharge_summary_store, smart_ward_store, func } = this.props;

    let complete_recovery = {};
    let improved = {};
    let not_improved = {};
    let with_approval = {};
    let against_advice = {};
    let death = {};
    let dead_no_autopsy = {};
    let dead_autopsy = {};
    let by_escape = {};
    let by_transfer = {};
    let other = {};
    let follow_up_lab = {};

    if (patient_discharge_summary_store.patient_discharge_summary &&
    patient_discharge_summary_store.patient_discharge_summary.result.length > 0) {
      patient_discharge_summary_store.patient_discharge_summary.result.map( (result, index) => {

        if (result.code.trim() === "DSC00201") {
          complete_recovery = result;
        }
        else if (result.code.trim() === "DSC00202") {
          improved = result;
        }
        else if (result.code.trim() === "DSC00203") {
          not_improved = result;
        }
        else if (result.code.trim() === "DSC00304") {
          with_approval = result;
        }
        else if (result.code.trim() === "DSC00305") {
          against_advice = result;
        }
        else if (result.code.trim() === "DSC00306") {
          death = result;
        }
        else if (result.code.trim() === "DSC00207") {
          dead_no_autopsy = result;
        }
        else if (result.code.trim() === "DSC00208") {
          dead_autopsy = result;
        }
        else if (result.code.trim() === "DSC00301") {
          by_escape = result;
        }
        else if (result.code.trim() === "DSC00302") {
          by_transfer = result;
        }
        else if (result.code.trim() === "DSC00303") {
          other = result;
        }
        else if (result.code.trim() === "DSC00901") {
          follow_up_lab = result;
        }

      });
    }

    return (
      <div>

        <div className="row margin-left-2px">
          <div className="col font-center">
              <label className="font-18px font-weight-bold">Discharge Status</label>
          </div>
          <div className="col font-center">
              <label className="font-18px font-weight-bold">Type of Discharge</label>
          </div>
        </div>

        <div className="row margin-left-2px">
          <div className="col">
            <div className="row">
              <div className="col-5">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  complete_recovery.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">Complete Recovery</label>
              </div>
              <div className="col-3">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  improved.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">Improved</label>
              </div>
              <div className="col-4">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  not_improved.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">Not Improved</label>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="col">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  with_approval.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">With Approval</label>
              </div>
              <div className="col">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  against_advice.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">Against Advice</label>
              </div>
              <div className="col">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  death.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">Death</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-left-2px">
          <div className="col">
            <div className="row">
              <div className="col-5">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  dead_no_autopsy.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">Dead No Autopsy</label>
              </div>
              <div className="col-4">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  dead_autopsy.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">Dead Autopsy</label>
              </div>
              <div className="col">
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="col">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  by_escape.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">By Escape</label>
              </div>
              <div className="col">
                {
                  patient_discharge_summary_store.patient_discharge_summary &&
                  patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
                  by_transfer.codeValue === "Y" ?
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_active}></input>
                  )
                  :
                  (
                    <input className="margin-left-20px" type="checkbox" checked={this.state.checkbox_inactive}></input>
                  )
                }
                <label className="margin-left-10px font-14px">By Transfer</label>
              </div>
              <div className="col">
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
                    <label className="margin-left-10px font-14px">Other: {other.textValue}</label>
                  )
                  :
                  (
                    <label className="margin-left-10px font-14px">Other .........</label>
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <div className="border-bottom-solid-black-1p5"></div>

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-18px font-weight-bold">Follow up / Lab:</label>
            {
              patient_discharge_summary_store.patient_discharge_summary &&
              patient_discharge_summary_store.patient_discharge_summary.result.length > 0 &&
              follow_up_lab ?
              (
                <div className="div-width-100p margin-left-10px font-14px">
                  {follow_up_lab.textValue}
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
            <div className="row">
              <div className="col">
                <label className="font-18px font-weight-bold">Attending Physician:</label>
                {
                  smart_ward_store.patient_info &&
                  smart_ward_store.patient_info.result.length > 0 ?
                    smart_ward_store.patient_info.result.map( (info, info_index) =>
                    <label key={info_index} className="margin-left-10px font-14px">{info.doctorName}</label>
                  )
                  :
                  (
                    <label className=""></label>
                  )
                }
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <label className="font-18px font-weight-bold">Signature:</label>
                  </div>
                  <div className="col">
                    <div className="img-frame-signature">

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
              </div>
              <div className="col">
                <label className="font-18px font-weight-bold">Date:</label>
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
          </div>
        </div>

      </div>
    );
  }
}

// <img
//   className="img-signature"
//   src="http://10.20.212.127/BITIMAGE/Doctor%20Signature/Test_Signature%20IT.jpg"
// />

export default Discharge_Summary_Ram_Footer;
