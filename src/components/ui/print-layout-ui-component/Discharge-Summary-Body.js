import React, { Component } from 'react';

class Discharge_Summary_Body extends React.Component {

  componentDidMount() {
  }

  render() {

    return (
      <div>

        <div className="row">

          <div className="col">
            <div className="row">
              <div className="col">
                <label className="margin-left-10px">รหัสโรค (Diagnosis)</label>
              </div>
              <div className="col">
                <label>DRG =</label>
              </div>
              <div className="col">
                <label>Adj Rw =</label>
              </div>
            </div>

            <div className="row border-1px border-solid border-black">
              <div className="col">
                <label>Code ICD-10</label>
              </div>
              <div className="col">
                <label>Disease Name</label>
              </div>
              <div className="col">
                <label>Diagnosis Type</label>
              </div>
            </div>

            <div className="row div-height-200px">
              <div className="col-2 border-1px border-solid border-black">
                <label></label>
              </div>
              <div className="col-6 border-1px border-solid border-black">
                <label></label>
              </div>
              <div className="col-4 border-1px border-solid border-black">
                <label></label>
              </div>
            </div>

          </div>



          <div className="col">
            <div className="row">
              <div className="col">
                <label>รหัสหัตถการ (Non Operation Room Procedure)</label>
              </div>
            </div>

            <div className="row border-1px border-solid border-black">
              <div className="col">
                <label>Code ICD-9</label>
              </div>
              <div className="col">
                <label>Procedure Name</label>
              </div>
            </div>


            <div className="row div-height-200px">
              <div className="col-2 border-1px border-solid border-black">
                <label></label>
              </div>
              <div className="col-10 border-1px border-solid border-black">
                <label></label>
              </div>
            </div>
          </div>
        </div>



        <div className="row">
          <div className="col">
            <label>รหัสหัตถการ (Operation)</label>
          </div>
        </div>

        <div className="row border-1px border-solid border-black">
          <div className="col-2 border-1px border-solid border-black">
            <label>Code ICD-9</label>
          </div>
          <div className="col-5 border-1px border-solid border-black">
            <label>Operation Name</label>
          </div>
          <div className="col-2 border-1px border-solid border-black">
            <label>Surgeon</label>
          </div>
          <div className="col-1 border-1px border-solid border-black">
            <label>Date</label>
          </div>
          <div className="col-1 border-1px border-solid border-black">
            <label>In</label>
          </div>
          <div className="col-1 border-1px border-solid border-black">
            <label>Out</label>
          </div>
        </div>


        <div className="row div-height-100px">
          <div className="col-2 border-1px border-solid border-black">
            <label></label>
          </div>
          <div className="col-5 border-1px border-solid border-black">
            <label></label>
          </div>
          <div className="col-2 border-1px border-solid border-black">
            <label></label>
          </div>
          <div className="col-1 border-1px border-solid border-black">
            <label></label>
          </div>
          <div className="col-1 border-1px border-solid border-black">
            <label></label>
          </div>
          <div className="col-1 border-1px border-solid border-black">
            <label></label>
          </div>
        </div>

      </div>
    );
  }
}


export default Discharge_Summary_Body;
