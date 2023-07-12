import axios from 'axios';
import urlencode from 'urlencode';
import Internet_protocol_DBService_JSON_path from '../../../paths/APIs-Path.js';

const getSWPatientInfo = (ocmnum) => {

  if (ocmnum && ocmnum.trim()) {

    const request_config = {
      params: {
        dbServiceName: 'AWGetPatientInfoByOrder',
        ocmnum :  ocmnum,
      }
    };

    return ( dispatch, getState ) => {

      axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
        .then( async (response) => {
          try {
            // let json_load = await JSON.parse(response.data.json);
            let json_load = await response.data;
            if (json_load.result.length > 0) {
              dispatch({ type: "INSERT_PATIENT_INFO", data: json_load });
              dispatch({ type:  "SET_CALL_PATIENT_INFO", status: false });
            }
            else {
              dispatch({ type: "SMARTWARD_PUT_NOTFOUND", error: "Patient NOT FOUND." });
            }
          } catch (error) {
            // let error_load = await response.data.error;
            // console.log(response);
            dispatch({ type: "SMARTWARD_PUT_ERROR", error: error });
          }
        })
        .catch(error => console.error(error));

    }

  }

  else {
    return ( dispatch, getState ) => {}
  }

}

const getSWPatientVS = (none) => {

  return ( dispatch, getState ) => {

    const request_config = {
      params: {
        dbServiceName: 'SWPatientVS',
        ocmnum: getState().smart_ward_store.patient_info.result[0].ocmnum
        // ocmnum: urlencode(getState().smart_ward_store.patient_info.result[0].ocmnum)
      }
    };

    axios.get(`${Internet_protocol_DBService_JSON_path}`, request_config)
      .then( async (response) => {
        try {
          // let json_load = await JSON.parse(response.data.json);
          let json_load = await response.data;
          dispatch({ type: "INSERT_PATIENT_VITAL_SIGN", data: json_load });
          dispatch({ type: "SET_CALL_PATIENT_VITAL_SIGN", status: false });
        } catch (error) {
          // let error_load = await response.data.error;
          // console.log(response.data.error);
          dispatch({ type: "SMARTWARD_PUT_ERROR", error: error });
        }
      })
      .catch(error => console.error(error));

  }

}

export { getSWPatientInfo, getSWPatientVS };
