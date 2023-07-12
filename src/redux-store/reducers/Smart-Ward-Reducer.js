const initiate_state = {
  file: 'Smart-Ward-Reducer',
  status: 'OK',
  error: null,
  error_NOTFOUND: null,
  call_state: {
    patient_list: false,
    patient_info: false,
    patient_vital_sign: false,
    patient_summary: false
  },
  patient_list: null,
  patient_info: null,
  patient_vital_sign: null,
  patient_summary: {
    information: null,
    contract: null,
    allergy: null,
    allergicMed: null,
    allergicFood: null,
    lastICD10: null,
    admitICD10: null,
    lastICD9: null,
    chronic: null,
    labINR: null,
    lab: null,
    medicine: null,
    drugReconcile: null,
    homeMedicine: null,
    cardiacDevice: null,
    babyNickName: null,
    privateMed: null,
    wardNotLike: null,
    wardLike: null,
    bookLike: null,
    member: null
  }
}

const smart_ward_reducer = ( state = initiate_state, action ) => {
  switch (action.type) {

    case 'SET_CALL_PATIENT_INFO':
      return {
        ...state,
        call_state: {
          ...state.call_state,
          patient_info: action.status
        }
      }

    case 'SET_CALL_PATIENT_VITAL_SIGN':
      return {
        ...state,
        call_state: {
          ...state.call_state,
          patient_vital_sign: action.status
        }
      }

    case 'INSERT_PATIENT_LIST':
      return {
        ...state,
        patient_list: action.data
      }

    case 'CLEAR_PATIENT_LIST':
      return {
        ...state,
        patient_list: null
      }

    case 'INSERT_PATIENT_INFO':
      return {
        ...state,
        patient_info: action.data
      }

    case 'CLEAR_PATIENT_INFO':
      return {
        ...state,
        patient_info: null
      }

    case 'INSERT_PATIENT_VITAL_SIGN':
      return {
        ...state,
        patient_vital_sign: action.data
      }

    case 'CLEAR_PATIENT_VITAL_SIGN':
      return {
        ...state,
        patient_vital_sign: null
      }

    case 'INSERT_PATIENT_SUMMARY_INFORMATION':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          information: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_CONTRACT':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          contract: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_ALLERGY':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          allergy: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_ALLERGICMED':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          allergicMed: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_ALLERGICFOOD':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          allergicFood: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_LASTICD10':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          lastICD10: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_ADMITICD10':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          admitICD10: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_LASTICD9':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          lastICD9: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_CHRONIC':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          chronic: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_LABINR':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          labINR: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_LAB':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          lab: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_MEDICINE':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          medicine: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_DRUGRECONCILE':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          drugReconcile: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_HOMEMEDICINE':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          homeMedicine: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_CARDIACDEVICE':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          cardiacDevice: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_BABYNICKNAME':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          babyNickName: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_PRIVATEMED':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          privateMed: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_WARDNOTLIKE':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          wardNotLike: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_WARDLIKE':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          wardLike: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_BOOKLIKE':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          bookLike: action.data
        }
      }

    case 'INSERT_PATIENT_SUMMARY_MEMBER':
      return {
        ...state,
        patient_summary: {
          ...state.patient_summary,
          member: action.data
        }
      }

    case 'SMARTWARD_PUT_ERROR':
      return {
        ...state,
        error: action.error
      }

    case 'SMARTWARD_CLEAR_ERROR':
      return {
        ...state,
        error: null
      }

    case 'SMARTWARD_PUT_NOTFOUND':
      return {
        ...state,
        error_NOTFOUND: action.error
      }

    default:
      return state;

  }
}

export default smart_ward_reducer;
