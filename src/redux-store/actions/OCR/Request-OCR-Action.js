import axios from 'axios';
import urlencode from 'urlencode';
import Internet_protocol_DBService_JSON_path from '../../../paths/APIs-Path.js';

import * as func_date from '../../../calculators/date/Date-Calculator';
import * as func_time from '../../../calculators/time/Time-Calculator';

const getRequestOCR = (user) => {

  return ( dispatch, getState ) => {

    if (user.trim()) {
      const request_config = {
        params: {
          prm_ocm: urlencode(getState().smart_ward_store.patient_info.result[0].ocmnum),
          prm_date: urlencode(func_date.functionGetCurrentDate()),
          prm_user: urlencode(user),
          prm_type: urlencode('FACC-06')
        }
      };

      axios.get(`http://10.20.212.136/AWSqlConnect/RequestOCR.php`, request_config)
        .then( async (response) => {
          try {
            let json_load = await response.data;
            dispatch({ type: "INSERT_REQUEST_OCR", data: json_load });
          } catch (error) {
            dispatch({ type: "REQUEST_OCR_PUT_ERROR", error: error });
          }
        })
        .catch(error => console.error(error));
    }

  }

}

export {
  getRequestOCR
};
