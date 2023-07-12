import axios from 'axios';
import urlencode from 'urlencode';
import Internet_protocol_DBService_JSON_path from '../../../paths/APIs-Path.js';

const getSWPatientDischargeSummaryD = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'SWPatientDischargeSummary',
        ocmnum: getState().smart_ward_store.patient_info.result[0].ocmnum,
        type: "D"
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_DISCHARGE_SUMMARY_D", data: json_load });
        } catch (error) {
          dispatch({ type: "PATIENT_DISCHARGE_SUMMARY_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

const getSWPatientDischargeSummaryS = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'SWPatientDischargeSummary',
        ocmnum: getState().smart_ward_store.patient_info.result[0].ocmnum,
        type: "S"
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_DISCHARGE_SUMMARY_S", data: json_load });
        } catch (error) {
          dispatch({ type: "PATIENT_DISCHARGE_SUMMARY_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

const getSWPatientDischargeSummaryT = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'SWPatientDischargeSummary',
        ocmnum: getState().smart_ward_store.patient_info.result[0].ocmnum,
        type: "T"
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_DISCHARGE_SUMMARY_T", data: json_load });
        } catch (error) {
          dispatch({ type: "PATIENT_DISCHARGE_SUMMARY_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

const getAWPatientDischargeSummary = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'AWPatientDischargeSummary',
        ocmnum: getState().smart_ward_store.patient_info.result[0].ocmnum
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_DISCHARGE_SUMMARY", data: json_load });
        } catch (error) {
          dispatch({ type: "PATIENT_DISCHARGE_SUMMARY_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

const getAWPatientDischargeSummaryV2 = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'AWPatientDischargeSummaryV2',
        ocmnum: getState().smart_ward_store.patient_info.result[0].ocmnum
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_DISCHARGE_SUMMARY", data: json_load });
        } catch (error) {
          dispatch({ type: "PATIENT_DISCHARGE_SUMMARY_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

const getAWPatientDischargeSummaryInfo = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'AWPatientDischargeSummaryInfo',
        ocmnum: getState().smart_ward_store.patient_info.result[0].ocmnum
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_DISCHARGE_SUMMARY_INFO", data: json_load });
        } catch (error) {
          dispatch({ type: "PATIENT_DISCHARGE_SUMMARY_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

const getSPGetHomeMedOrderListVersion2 = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'SPGetHomeMedOrderListVersion2',
        sHosCod : '',
    		sOcmNum : getState().smart_ward_store.patient_info.result[0].ocmnum,
    		sPatTyp : 'I',
    		sVacYon : '',
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_HOME_MED", data: json_load });
        } catch (error) {
          dispatch({ type: "PATIENT_DISCHARGE_SUMMARY_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

const getAWSelectICDList = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'AWSelectICDList',
        ocmnum: getState().smart_ward_store.patient_info.result[0].ocmnum
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_ICD_LIST", data: json_load });
        } catch (error) {
          dispatch({ type: "PATIENT_DISCHARGE_SUMMARY_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

export {
  getSWPatientDischargeSummaryD,
  getSWPatientDischargeSummaryS,
  getSWPatientDischargeSummaryT,
  getAWPatientDischargeSummary,
  getAWPatientDischargeSummaryV2,
  getAWPatientDischargeSummaryInfo,
  getSPGetHomeMedOrderListVersion2,
  getAWSelectICDList
};
