import axios from 'axios';
import urlencode from 'urlencode';

const getEMRImage = () => {
  let x = "EMR OK!";
  console.log(x);

  const url_with_encoded = urlencode("http://10.88.3.14:8080/SmartWard/DBService_JSON?dbServiceName=SWGetPatientInfo&ocmnum=42505");
  console.log(url_with_encoded);

  const request_config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }

  // axios.get("http://localhost/IMGEMR%20Image/IMGEMR-Request.php")
  axios.get("http://127.0.0.1:4000/SmartWard/DBService_JSON?dbServiceName=SWGetPatientInfo&ocmnum=42505")
  // axios.get(url_)
  .then( (response) => {

    console.log(response.data);

  });
}

export {
  getEMRImage
};
