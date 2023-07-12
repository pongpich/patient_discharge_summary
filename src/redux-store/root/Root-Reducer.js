import { combineReducers } from 'redux';

import patient_discharge_summary_reducer from '../reducers/Patient-Discharge-Summary-Reducer';
import smart_ward_reducer from '../reducers/Smart-Ward-Reducer';
import request_ocr_reducer from '../reducers/Request-OCR-Reducer';

const root_reducer = combineReducers({
  smart_ward_store: smart_ward_reducer,
  patient_discharge_summary_store: patient_discharge_summary_reducer,
  request_ocr_store: request_ocr_reducer
});

export default root_reducer;
