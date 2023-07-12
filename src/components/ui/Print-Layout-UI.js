import React, { Component } from 'react';
import Barcode from 'react-barcode';

// import Hospital_Header from './print-layout-ui-component/Hospital-Header';
// import Discharge_Summary_Header from './print-layout-ui-component/Discharge-Summary-Header';
// import Discharge_Summary_Body from './print-layout-ui-component/Discharge-Summary-Body';
// import Discharge_Summary_Footer from './print-layout-ui-component/Discharge-Summary-Footer';

import Discharge_Summary_Note_Header from './print-layout-ui-component/Discharge-Summary-Note-Header';
// import Discharge_Summary_Note_Admission from './print-layout-ui-component/Discharge-Summary-Note-Admission';
// import Discharge_Summary_Note_Medication from './print-layout-ui-component/Discharge-Summary-Note-Medication';
// import Discharge_Summary_Note_Detail from './print-layout-ui-component/Discharge-Summary-Note-Detail';

import Discharge_Summary_Ram_Detail from './print-layout-ui-component/Discharge-Summary-Ram-Detail';
import Discharge_Summary_Ram_Admission from './print-layout-ui-component/Discharge-Summary-Ram-Admission';
import Discharge_Summary_Ram_Reason from './print-layout-ui-component/Discharge-Summary-Ram-Reason';
import Discharge_Summary_Ram_Body from './print-layout-ui-component/Discharge-Summary-Ram-Body';
import Discharge_Summary_Ram_Medication from './print-layout-ui-component/Discharge-Summary-Ram-Medication';
import Discharge_Summary_Ram_Footer from './print-layout-ui-component/Discharge-Summary-Ram-Footer';

class Print_Layout_UI extends React.Component {

  componentDidMount() {
  }

  render() {

    const { patient_discharge_summary_store, smart_ward_store, request_ocr_store, func } = this.props;

    return (
      <div className="div-container-print">
        <div className="div-content-print">
          <Discharge_Summary_Note_Header
            patient_discharge_summary_store = {patient_discharge_summary_store}
            smart_ward_store = {smart_ward_store}
            request_ocr_store = {request_ocr_store}
            func = {{
              date: func.date,
              time: func.time
            }}
          />

          <div className="div-height-10px"></div>

          <div className="border-solid-black-1p5">

            <Discharge_Summary_Ram_Detail
              patient_discharge_summary_store = {patient_discharge_summary_store}
              smart_ward_store = {smart_ward_store}
              func = {{
                date: func.date,
                time: func.time
              }}
            />

            <div className="border-bottom-solid-black-1p5"></div>

            <Discharge_Summary_Ram_Admission
              patient_discharge_summary_store = {patient_discharge_summary_store}
              smart_ward_store = {smart_ward_store}
              func = {{
                date: func.date,
                time: func.time
              }}
            />

            <div className="border-bottom-solid-black-1p5"></div>

            <Discharge_Summary_Ram_Reason
              patient_discharge_summary_store = {patient_discharge_summary_store}
              func = {{
                date: func.date,
                time: func.time
              }}
            />

            <div className="border-bottom-solid-black-1p5"></div>

            <Discharge_Summary_Ram_Body
              patient_discharge_summary_store = {patient_discharge_summary_store}
              func = {{
                date: func.date,
                time: func.time
              }}
            />

            <div className="border-bottom-solid-black-1p5"></div>

            <Discharge_Summary_Ram_Medication
              patient_discharge_summary_store = {patient_discharge_summary_store} />

            <div className="border-bottom-solid-black-1p5"></div>

            <Discharge_Summary_Ram_Footer
              patient_discharge_summary_store = {patient_discharge_summary_store}
              smart_ward_store = {smart_ward_store}
              func = {{
                date: func.date,
                time: func.time
              }}
            />

          </div>

          <div className="row">
            <div className="col">
              {
                smart_ward_store.patient_info &&
                smart_ward_store.patient_info.result.length > 0 ?
                  smart_ward_store.patient_info.result.map( (info, info_index) =>
                  <div key={info_index} className="font-center hn-barcode">
                    <div className="div-height-10px"></div>
                    <div>
                      <Barcode value={info.hn} displayValue={false} height={50} />
                    </div>
                  </div>
                )
                :
                (
                  <div className="font-center hn-barcode"></div>
                )
              }
            </div>
            <div className="col">

            </div>
            <div className="col">
              <div className="float-right">
                <h5>FACC-06</h5>
              </div>
            </div>
          </div>

          <div className="div-height-10px"></div>

          <div className="div-width-100p">
            <button type="button" id="printPageButton" className="button-blue font-22px div-width-100p" onClick={() => window.print()}>Print</button>
          </div>
        </div>
      </div>
    );
  }
}


export default Print_Layout_UI;
