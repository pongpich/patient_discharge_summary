const initiate_state = {
  file: 'Patient-Discharge-Summary-Reducer',
  status: 'OK',
  error: null,
  patient_discharge_summary_D: null,
  patient_discharge_summary_S: null,
  patient_discharge_summary_T: null,
  patient_discharge_summary: null,
  patient_discharge_summary_info: null,
  patient_home_med: null,
  patient_ICD_list: null
}

const patient_discharge_summary_reducer = ( state = initiate_state, action ) => {
  switch (action.type) {

    case 'INSERT_PATIENT_DISCHARGE_SUMMARY_D':
      return {
        ...state,
        patient_discharge_summary_D: action.data
      }

    case 'CLEAR_PATIENT_DISCHARGE_SUMMARY_D':
      return {
        ...state,
        patient_discharge_summary_D: null
      }

    case 'INSERT_PATIENT_DISCHARGE_SUMMARY_S':
      return {
        ...state,
        patient_discharge_summary_S: action.data
      }

    case 'CLEAR_PATIENT_DISCHARGE_SUMMARY_S':
      return {
        ...state,
        patient_discharge_summary_S: null
      }

    case 'INSERT_PATIENT_DISCHARGE_SUMMARY_T':
      return {
        ...state,
        patient_discharge_summary_T: action.data
      }

    case 'CLEAR_PATIENT_DISCHARGE_SUMMARY_T':
      return {
        ...state,
        patient_discharge_summary_T: null
      }

    case 'INSERT_PATIENT_DISCHARGE_SUMMARY':
      return {
        ...state,
        patient_discharge_summary: action.data
      }

    case 'CLEAR_PATIENT_DISCHARGE_SUMMARY':
      return {
        ...state,
        patient_discharge_summary: null
      }

    case 'INSERT_PATIENT_DISCHARGE_SUMMARY_INFO':
      return {
        ...state,
        patient_discharge_summary_info: action.data
      }

    case 'CLEAR_PATIENT_DISCHARGE_SUMMARY_INFO':
      return {
        ...state,
        patient_discharge_summary_info: null
      }

    case 'INSERT_PATIENT_HOME_MED':
      return {
        ...state,
        patient_home_med: action.data
      }

    case 'CLEAR_PATIENT_HOME_MED':
      return {
        ...state,
        patient_home_med: null
      }

    case 'INSERT_PATIENT_ICD_LIST':
      return {
        ...state,
        patient_ICD_list: action.data
      }

    case 'CLEAR_PATIENT_ICD_LIST':
      return {
        ...state,
        patient_ICD_list: null
      }

    case 'PATIENT_DISCHARGE_SUMMARY_PUT_ERROR':
      return {
        ...state,
        error: action.error
      }

    case 'PATIENT_DISCHARGE_SUMMARY_CLEAR_ERROR':
      return {
        ...state,
        error: null
      }

    default:
      return state;

  }
}

export default patient_discharge_summary_reducer;
