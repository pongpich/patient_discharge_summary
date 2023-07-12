import React, { Component } from 'react';

class Discharge_SUmmary_Note_Medication extends React.Component {

  componentDidMount() {
  }

  render() {

    const { patient_discharge_summary_store } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col">
            <h5 className="">Home Medication</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-2 font-center border-black border-solid border-1p5 border-collapse">
            <h5 className="margin-top-30px">ลำดับที่</h5>
          </div>
          <div className="col-3 font-center border-black border-solid border-1p5 border-collapse">
            <h5 className="margin-top-30px">ชื่อยาและขนาด</h5>
          </div>
          <div className="col-3 font-center border-black border-solid border-1p5 border-collapse">
            <h5 className="margin-top-30px">วิธีใช้</h5>
          </div>
          <div className="col-2 font-center border-black border-solid border-1p5 border-collapse">
            <h5 className="margin-top-10px">จำนวนยา/จำนวนวันที่ใช้ในการรักษา</h5>
          </div>
          <div className="col-2 font-center border-black border-solid border-1p5">
            <h5 className="margin-top-30px">หมายเหตุ</h5>
          </div>
        </div>

        {
          patient_discharge_summary_store.patient_home_med &&
          patient_discharge_summary_store.patient_home_med.result.length > 0 ?
            patient_discharge_summary_store.patient_home_med.result.map( (med, med_index) =>
              <div key={med_index} className="row">
                <div className="col-2 font-center border-black border-solid border-1p5 border-collapse">
                  <h5 className="font-14px">{med_index+1}</h5>
                </div>
                <div className="col-3 font-left border-black border-solid border-1p5 border-collapse">
                  <h5 className="font-14px">{med.name}</h5>
                </div>
                <div className="col-3 font-left border-black border-solid border-1p5 border-collapse">
                  <h5 className="font-14px">{med.usage}</h5>
                </div>
                <div className="col-2 font-center border-black border-solid border-1p5 border-collapse">
                  <h5 className=""></h5>
                </div>
                <div className="col-2 font-center border-black border-solid border-1p5">
                  <h5 className=""></h5>
                </div>
              </div>
            )
          :
          (
            <div className="row">
              <div className="col-2 font-center border-black border-solid border-1p5 border-collapse">
                <h5 className=""></h5>
              </div>
              <div className="col-3 font-center border-black border-solid border-1p5 border-collapse">
                <h5 className=""></h5>
              </div>
              <div className="col-3 font-center border-black border-solid border-1p5 border-collapse">
                <h5 className=""></h5>
              </div>
              <div className="col-2 font-center border-black border-solid border-1p5 border-collapse">
                <h5 className=""></h5>
              </div>
              <div className="col-2 font-center border-black border-solid border-1p5">
                <h5 className=""></h5>
              </div>
            </div>
          )
        }

        <div className="div-height-10px"></div>
        
        <div className="row">
          <div className="col">
            <h5 className="">เภสัชกร&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________________</h5>
          </div>
          <div className="col">
            <h5 className="">___________________________ Attending Physician</h5>
          </div>
        </div>

      </div>
    );
  }
}


export default Discharge_SUmmary_Note_Medication;
