import React, { Component } from 'react';
import { connect } from 'react-redux';

import Discharge_Summary_UI from '../ui/Discharge-Summary-UI';

import * as func_date from '../../calculators/date/Date-Calculator';
import * as func_time from '../../calculators/time/Time-Calculator';

import {
  getSWPatientInfo,
  getSWPatientVS
} from '../../redux-store/actions/patient/Info-Action';

import {
  getSWPatientDischargeSummaryD,
  getSWPatientDischargeSummaryS,
  getSWPatientDischargeSummaryT,
  getAWPatientDischargeSummaryV2
} from '../../redux-store/actions/patient/Discharge-Summary-Action';

class Patient_Discharge_Summary extends React.Component {

  componentDidMount() {
    if (!this.props.smart_ward_store.patient_info &&
    this.props.match.params.id) {
      this.props.getSWPatientInfo(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.smart_ward_store.patient_info && !this.props.smart_ward_store.patient_vital_sign) {
      this.props.getSWPatientVS();
    }

    if (this.props.smart_ward_store.patient_info &&
    this.props.smart_ward_store.patient_info !== prevProps.smart_ward_store.patient_info) {
      this.props.getSWPatientVS();
    }

    if (this.props.smart_ward_store.patient_info && !this.props.patient_discharge_summary_store.patient_discharge_summary_D) {
      this.props.getSWPatientDischargeSummaryD();
    }

    if (this.props.smart_ward_store.patient_info && !this.props.patient_discharge_summary_store.patient_discharge_summary_S) {
      this.props.getSWPatientDischargeSummaryS();
    }

    if (this.props.smart_ward_store.patient_info && !this.props.patient_discharge_summary_store.patient_discharge_summary_T) {
      this.props.getSWPatientDischargeSummaryT();
    }

    if (this.props.smart_ward_store.patient_info && !this.props.patient_discharge_summary_store.patient_discharge_summary) {
      this.props.getAWPatientDischargeSummaryV2();
    }

    if (this.props.smart_ward_store.patient_info &&
    this.props.smart_ward_store.patient_info !== prevProps.smart_ward_store.patient_info) {
      this.props.getSWPatientDischargeSummaryD();
      this.props.getSWPatientDischargeSummaryS();
      this.props.getSWPatientDischargeSummaryT();
      this.props.getAWPatientDischargeSummaryV2();
    }
  }

  render() {

    return (
      <div>
        <Discharge_Summary_UI
          patient_discharge_summary_store = {this.props.patient_discharge_summary_store}
          smart_ward_store = {this.props.smart_ward_store}
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
    smart_ward_store: state.smart_ward_store
  }
}

const map_dispatch_to_props = dispatch => {
  return {
    getSWPatientInfo: (ocmnum) => dispatch( getSWPatientInfo(ocmnum) ),
    clearSWPatientInfo: () => dispatch({ type: "CLEAR_PATIENT_INFO" }),
    getSWPatientVS: () => dispatch( getSWPatientVS() ),
    clearSWPatientVS: () => dispatch({ type: "CLEAR_PATIENT_VITAL_SIGN" }),
    getSWPatientDischargeSummaryD: () => dispatch( getSWPatientDischargeSummaryD() ),
    clearSWPatientDischargeSummaryD: () => dispatch({ type: "CLEAR_PATIENT_DISCHARGE_SUMMARY_D" }),
    getSWPatientDischargeSummaryS: () => dispatch( getSWPatientDischargeSummaryS() ),
    clearSWPatientDischargeSummaryS: () => dispatch({ type: "CLEAR_PATIENT_DISCHARGE_SUMMARY_S" }),
    getSWPatientDischargeSummaryT: () => dispatch( getSWPatientDischargeSummaryT() ),
    clearSWPatientDischargeSummaryT: () => dispatch({ type: "CLEAR_PATIENT_DISCHARGE_SUMMARY_T" }),
    getAWPatientDischargeSummaryV2: () => dispatch( getAWPatientDischargeSummaryV2() ),
    clearAWPatientDischargeSummaryV2: () => dispatch({ type: "CLEAR_PATIENT_DISCHARGE_SUMMARY" })
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(Patient_Discharge_Summary);
