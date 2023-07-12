import axios from 'axios';

const getDashboard = () => {

  console.log("Hello Service");

  axios.get('http://192.0.0.28:8080/DashboardOPD/DBService?dbServiceName=DO_PatientListCheckStatus&station=op')
  .then( async (response) => {
    try {
      // let json_load = await JSON.parse(response.data.json);
      console.log("OPD Dashboard Data -> ", response.data);
    } catch (error) {
      // let error_load = await response.data.error;
      // console.log(response.data.error);
      console.log(error);
    }
  })
  .catch(error => console.error(error));

}

const getSWPatientInfo = () => {

  console.log("Hello Smart Ward");

  axios.get('http://192.0.0.28:8080/SmartWard/DBService_JSON?dbServiceName=SWGetPatientInfo&ocmnum=53559')
  .then( async (response) => {
    try {
      // let json_load = await JSON.parse(response.data.json);
      console.log("OPD Dashboard Data -> ", response.data);
    } catch (error) {
      // let error_load = await response.data.error;
      // console.log(response.data.error);
      console.log(error);
    }
  })
  .catch(error => console.error(error));

}

export {
  getDashboard,
  getSWPatientInfo
};
