import axios from 'axios';
import qs from 'qs';
import urlencode from 'urlencode';

const getSWPatientInfo = () => {

  const params = new URLSearchParams();
  params.append('url_path', 'DBService');

  const data = {
    url_path: "DBService",
    dbServiceName: "SPVerifyPatient",
    patNam: "จับ",
    patSurNam: "มณีโชติ",
    chtNum: "62125",
    patBir: "19220101",
    patMob: "0892882050",
    idCard: "3800900805321"
  };

  const options = {
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: 'http://192.168.199.64:4000/DMZ/InboundService'
  }

  const request_config = {
    params: {
      // url_path: "DBService",
      dbServiceName: "SWGetPatientInfo",
      ocmnum: "41579"
      // patNam: "จับ",
      // patSurNam: "มณีโชติ",
      // chtNum: "62125",
      // patBir: "19220101",
      // patMob: "0892882050",
      // idCard: "3800900805321"
    }
  };

  const app_config = {
    path: "http://192.168.43.244:4000/DMZ/InboundService"
  }

  Object.keys(request_config.params).map( (params, index) => {
      console.log(`${params}: ${request_config.params[params]}`);
      if (index === 0)
          app_config.path += `?${urlencode(params)}=${urlencode(request_config.params[params])}`;
      else
          app_config.path += `&${urlencode(params)}=${urlencode(request_config.params[params])}`;
  });

  console.log(app_config.path);

  // axios.post(app_config.path)
  // axios.post(`http://192.168.43.244:4000/DMZ/InboundService`, null, request_config)
  // axios.post(`http://192.168.199.64:4000/DMZ/InboundService`, {
  //   url_path: "DBService",
  //   dbServiceName: "SPVerifyPatient",
  //   patNam: "จับ",
  //   patSurNam: "มณีโชติ",
  //   chtNum: "62125",
  //   patBir: "19220101",
  //   patMob: "0892882050",
  //   idCard: "3800900805321"
  // })
  // axios.post(options)
  axios.get("http://127.0.0.1/php-procedure/sql-contructor.php", request_config)
    .then( (response) => {
      try {
        let datax = response.data
        console.log(datax);
      } catch (error) {
        console.log("ERROR -> ", error);
      }
    })
    .catch(error => console.error(error));
}

export {
  getSWPatientInfo
};
