import React, { Component } from 'react';
import { connect } from 'react-redux';

import Print_Layout_UI from '../ui/Print-Layout-UI';

import * as func_date from '../../calculators/date/Date-Calculator';
import * as func_time from '../../calculators/time/Time-Calculator';

import {
  getSWPatientInfo
} from '../../redux-store/actions/patient/Info-Action';

import {
  getAWPatientDischargeSummary,
  getAWPatientDischargeSummaryInfo,
  getSPGetHomeMedOrderListVersion2,
  getAWPatientDischargeSummaryV2,
  getAWSelectICDList
} from '../../redux-store/actions/patient/Discharge-Summary-Action';

import {
  getRequestOCR
} from '../../redux-store/actions/OCR/Request-OCR-Action';

class Print_Layout extends React.Component {

  constructor() {
    super();

    this.state = {
      ocr_call: false
    };
  }

  componentDidMount() {
    if (!this.props.smart_ward_store.patient_info &&
    this.props.match.params.id) {
      this.props.getSWPatientInfo(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.props.smart_ward_store.patient_info && !this.props.patient_discharge_summary_store.patient_discharge_summary) {
      this.props.getAWPatientDischargeSummaryV2();
    }

    if (this.props.smart_ward_store.patient_info && !this.props.patient_discharge_summary_store.patient_discharge_summary_info) {
      this.props.getAWPatientDischargeSummaryInfo();
    }

    if (this.props.smart_ward_store.patient_info && !this.props.patient_discharge_summary_store.patient_home_med) {
      this.props.getSPGetHomeMedOrderListVersion2();
    }

    if (this.props.smart_ward_store.patient_info && !this.props.patient_discharge_summary_store.patient_ICD_list) {
      this.props.getAWSelectICDList();
    }

    if (this.props.smart_ward_store.patient_info &&
    !this.props.request_ocr_store.ocr_number &&
    this.props.match.params.user &&
    this.state.ocr_call === false) {
      this.setState({
        ocr_call: true
      });
      this.props.getRequestOCR(this.props.match.params.user);
    }

    if (this.props.smart_ward_store.patient_info &&
    this.props.smart_ward_store.patient_info !== prevProps.smart_ward_store.patient_info) {
      this.props.getAWPatientDischargeSummaryV2();
      this.props.getAWPatientDischargeSummaryInfo();
      this.props.getSPGetHomeMedOrderListVersion2();
      this.props.getAWSelectICDList();
    }

  }

  render() {

    return (
      <div>
        <Print_Layout_UI
          patient_discharge_summary_store = {this.props.patient_discharge_summary_store}
          smart_ward_store = {this.props.smart_ward_store}
          request_ocr_store = {this.props.request_ocr_store}
          func = {{
            date: func_date,
            time: func_time
          }}
        />
      </div>
    );
  }
}

const map_state_to_props = state => {
  return {
    patient_discharge_summary_store: state.patient_discharge_summary_store,
    smart_ward_store: state.smart_ward_store,
    request_ocr_store: state.request_ocr_store
  }
}

const map_dispatch_to_props = dispatch => {
  return {
    getSWPatientInfo: (ocmnum) => dispatch( getSWPatientInfo(ocmnum) ),
    clearSWPatientInfo: () => dispatch({ type: "CLEAR_PATIENT_INFO" }),
    getAWPatientDischargeSummary: () => dispatch( getAWPatientDischargeSummary() ),
    clearAWPatientDischargeSummary: () => dispatch({ type: "CLEAR_PATIENT_DISCHARGE_SUMMARY" }),
    getAWPatientDischargeSummaryInfo: () => dispatch( getAWPatientDischargeSummaryInfo() ),
    clearAWPatientDischargeSummaryInfo: () => dispatch({ type: "CLEAR_PATIENT_DISCHARGE_SUMMARY_INFO" }),
    getSPGetHomeMedOrderListVersion2: () => dispatch( getSPGetHomeMedOrderListVersion2() ),
    clearSPGetHomeMedOrderListVersion2: () => dispatch({ type: "CLEAR_PATIENT_HOME_MED" }),
    getAWPatientDischargeSummaryV2: () => dispatch( getAWPatientDischargeSummaryV2() ),
    clearAWPatientDischargeSummaryV2: () => dispatch({ type: "CLEAR_PATIENT_DISCHARGE_SUMMARY" }),
    getAWSelectICDList: () => dispatch( getAWSelectICDList() ),
    clearAWSelectICDList: () => dispatch({ type: "CLEAR_PATIENT_ICD_LIST" }),
    getRequestOCR: (user) => dispatch( getRequestOCR(user) )
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(Print_Layout);
