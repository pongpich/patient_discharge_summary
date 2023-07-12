import React, { Component } from 'react';

class Discharge_Summary_Header extends React.Component {

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <div className="row">
          <div className="col font-center">
            <h5 className="">Discharge Summary</h5>
          </div>
        </div>

        <div className="border-1p5 border-solid border-black">
          <div className="row">
            <div className="col-3">
              <label className="margin-left-10px">H.N. :</label>
            </div>
            <div className="col-3">
              <label>A.N. :</label>
            </div>
            <div className="col-6">
              <label>Patient's Name :</label>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <label className="margin-left-10px">ID No :</label>
            </div>
            <div className="col-2">
              <label>Date of birth :</label>
            </div>
            <div className="col-2">
              <label>Age :</label>
            </div>
            <div className="col-2">
              <label>Sex :</label>
            </div>
            <div className="col-2">
              <label>Marital Status :</label>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <label className="margin-left-10px">Ethnic Group :</label>
            </div>
            <div className="col-3">
              <label>Religion :</label>
            </div>
            <div className="col-7">
              <label>Person To be :</label>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="margin-left-10px">Address :</label>
            </div>
            <div className="col-6">
              <label>สิทธิ์ที่ใช้ :</label>
            </div>
          </div>
        </div>

        <div className="border-1p5 border-solid border-black">
          <div className="row">
            <div className="col-3">
              <label className="margin-left-10px">Date Time of Admission :</label>
            </div>
            <div className="col-3">
              <label>Date Time of Discharge :</label>
            </div>
            <div className="col-3">
              <label>Ward :</label>
            </div>
            <div className="col-3">
              <label>Room :</label>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <label className="margin-left-10px">Department :</label>
            </div>
            <div className="col-4">
              <label>Lenght of Stay : xx Days</label>
            </div>
            <div className="col-4">
              <label>Lenght over Time : xx Hours</label>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <label className="margin-left-10px">Discharge Status :</label>
            </div>
            <div className="col-4">
              <label>Type Of Discharge :</label>
            </div>
            <div className="col-4">
              <label>Birth Weight : xx gms.</label>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="margin-left-10px">Cause Of Death :</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div>
              <h5 className="">Principal Diagnosis :</h5>
            </div>
            <div>
              <label className="margin-left-10px"></label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div>
              <h5 className="">Comorbidity :</h5>
            </div>
            <div>
              <label className="margin-left-10px"></label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div>
              <h5 className="">Complication :</h5>
            </div>
            <div>
              <label className="margin-left-10px"></label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div>
              <h5 className="">Other Diagnosis :</h5>
            </div>
            <div>
              <label className="margin-left-10px"></label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div>
              <h5 className="">External Cause of Injury :</h5>
            </div>
            <div>
              <label className="margin-left-10px"></label>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default Discharge_Summary_Header;
