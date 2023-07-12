import React, { Component } from 'react';

class Discharge_Summary_Ram_Medication extends React.Component {

  componentDidMount() {
  }

  render() {

    const { patient_discharge_summary_store } = this.props;

    return (
      <div className="div-height-350px">

        <div className="row margin-left-2px">
          <div className="col">
            <label className="font-18px font-weight-bold">Home Medication :</label>

            {
              patient_discharge_summary_store.patient_home_med &&
              patient_discharge_summary_store.patient_home_med.result.length > 0 ?
                patient_discharge_summary_store.patient_home_med.result.map( (med, med_index) =>
                  <div key={med_index} className="row">
                    <div className="col-2 font-center">
                      <h5 className="font-14px">{med_index+1}</h5>
                    </div>
                    <div className="col-3 font-left">
                      <h5 className="font-14px">{med.name}</h5>
                    </div>
                    <div className="col-3 font-left">
                      <h5 className="font-14px">{med.usage}</h5>
                    </div>
                  </div>
                )
              :
              (
                <div className="row">
                  <div className="col-2 font-center">
                    <h5 className=""></h5>
                  </div>
                  <div className="col-3 font-center">
                    <h5 className=""></h5>
                  </div>
                  <div className="col-3 font-center">
                    <h5 className=""></h5>
                  </div>
                </div>
              )
            }
          </div>
        </div>

      </div>
    );
  }
}


export default Discharge_Summary_Ram_Medication;
