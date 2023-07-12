import React, { Component } from 'react';
import hospital_logo from '../../../image/TBH-01.png';

class Discharge_SUmmary_Note_Header extends React.Component {

  componentDidMount() {
  }

  render() {

    const { patient_discharge_summary_store, request_ocr_store, func } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="display-inline-block">
              <div className="hospital-logo-frame">
                <img className="hospital-logo-image" src={hospital_logo} />
              </div>
            </div>
            <div className="display-inline-block">
              <div className="margin-left-20px">
                <div className="hospital-name font-18px">โรงพยาบาลธนบุรี</div>
                <div className="hospital-name font-14px">34/1 ซอยอิสรภาพ 44 ถนนอิสรภาพ แขวงบ้านช่างหล่อ เขตบางกอกน้อย กรุงเทพ 10700 โทร. 0-2487-2000 แฟกซ์ 0-2412-7343</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col"></div>

          <div className="col">
            <div className="div-general-summary-sheet">
              <h5 className="text-decoration-underline">DISCHARGE SUMMARY</h5>
            </div>
          </div>

          <div className="col">
            <div className="float-right">
              {
                request_ocr_store.ocr_number &&
                request_ocr_store.ocr_number.length > 0 ?
                (
                  <h5>+{request_ocr_store.ocr_number[0].Return}+</h5>
                )
                :
                (
                  <h5></h5>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Discharge_SUmmary_Note_Header;
