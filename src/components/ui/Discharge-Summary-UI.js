import React, { Component } from 'react';

class Discharge_Summary_UI extends React.Component {

  render() {
    const { patient_discharge_summary_store, smart_ward_store, func } = this.props;

    return (
      <div>

        {
          smart_ward_store.patient_info &&
          smart_ward_store.patient_info.result.length > 0 ? (
            smart_ward_store.patient_info.result.map( ( patient_info, patient_info_index ) =>
              <div key={patient_info_index} className="bg-gray color-white">

                <div className="row">
                  <div className="col margin-left-25px"><h5 className="font-weight-normal">{patient_info.name}</h5></div>
                </div>

                <div className="row">
                  <div className="col margin-left-25px"><h5>H.N. {patient_info.hn}</h5></div>
                  <div className="col margin-left-25px"><h5>Age: {patient_info.age}</h5></div>
                  <div className="col margin-left-25px"><h5>Gender: {patient_info.gender}</h5></div>
                </div>

              </div>
            )
          )
          : (
            <div className="row bg-gray color-white">
              NOT FOUND
            </div>
          )
        }

        {/* {
          smart_ward_store.patient_vital_sign &&
          smart_ward_store.patient_vital_sign.result.length > 0 ? (
            <div className="bg-gray color-white">

              <div className="row">
                <div className="col margin-left-25px"><h5>Pulse: {smart_ward_store.patient_vital_sign.result[0].Pulse}</h5></div>
                <div className="col margin-left-25px"><h5>Temp: {smart_ward_store.patient_vital_sign.result[0]["T(C)"]}</h5></div>
                <div className="col margin-left-25px"><h5>SBP: {smart_ward_store.patient_vital_sign.result[0]["Systolic BP"]}</h5></div>
              </div>

              <div className="row">
                <div className="col margin-left-25px"><h5>Height:{smart_ward_store.patient_vital_sign.result[0].Height}</h5></div>
                <div className="col margin-left-25px"><h5>Weight: {smart_ward_store.patient_vital_sign.result[0].Weight}</h5></div>
                <div className="col margin-left-25px"><h5>DBP: {smart_ward_store.patient_vital_sign.result[0]["Diastolic BP"]}</h5></div>
              </div>

            </div>
          )
          : (
            <div className="row bg-gray color-white">
              NOT FOUND
            </div>
          )
        } */}

        {/* <div className="bg-lightgray">
          <div className="row">
            <div className="col margin-left-10px"><h5>Date</h5></div>
          </div>
          {
            patient_discharge_summary_store.patient_discharge_summary_D &&
            patient_discharge_summary_store.patient_discharge_summary_D.result.length > 0 ? (
              patient_discharge_summary_store.patient_discharge_summary_D.result.map( (summaryD, summaryD_index) =>
                <div key={summaryD_index} className="bg-white">
                  <div className="row">
                    <div className="col margin-left-10px">
                      <h5>{summaryD.name}</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col margin-left-10px">
                      <h5>{func.date.slashDateBuddhist(summaryD.value)}&nbsp;{func.time.colonTimeDateChrist(summaryD.value)}</h5>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="bg-white">
                NO DATA
              </div>
            )
          }
        </div> */}

        <div className="bg-lightgray">
          <div className="row">
            <div className="col margin-left-10px"><h5>Type</h5></div>
          </div>
          {/* {
            patient_discharge_summary_store.patient_discharge_summary_T &&
            patient_discharge_summary_store.patient_discharge_summary_T.result.length > 0 ? (
              patient_discharge_summary_store.patient_discharge_summary_T.result.map( (summaryT, summaryT_index) =>
                <div key={summaryT_index} className="bg-white">
                  <div className="row">
                    <div className="col margin-left-10px">
                      <h5>{summaryT.name}</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col margin-left-10px">
                      <h5>{summaryT.value}</h5>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="bg-white">
                NO DATA
              </div>
            )
          } */}
        </div>

        <div className="bg-lightgray">
          <div className="row">
            <div className="col margin-left-10px"><h5>Status</h5></div>
          </div>
          {/* {
            patient_discharge_summary_store.patient_discharge_summary_S &&
            patient_discharge_summary_store.patient_discharge_summary_S.result.length > 0 ? (
              patient_discharge_summary_store.patient_discharge_summary_S.result.map( (summaryS, summaryS_index) =>
                <div key={summaryS_index} className="bg-white">
                  <div className="row">
                    <div className="col margin-left-10px">
                      <h5>{summaryS.name}</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col margin-left-10px">
                      <h5>{summaryS.value}</h5>
                    </div>
                  </div>
                  <div className="row div-height-2px bg-lightgray margin-left-10px"></div>
                </div>
              )
            ) : (
              <div className="bg-white">
                NO DATA
              </div>
            )
          } */}
        </div>

      </div>
    );
  }
}

export default Discharge_Summary_UI;
