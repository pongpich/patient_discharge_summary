const initiate_state = {
  file: 'Request-OCR-Reducer',
  status: 'OK',
  error: null,
  ocr_number: null
}

const request_ocr_reducer = ( state = initiate_state, action ) => {
  switch (action.type) {

    case 'INSERT_REQUEST_OCR':
      return {
        ...state,
        ocr_number: action.data
      }

    case 'REQUEST_OCR_PUT_ERROR':
      return {
        ...state,
        error: action.error
      }

    default:
      return state;

  }
}

export default request_ocr_reducer;
