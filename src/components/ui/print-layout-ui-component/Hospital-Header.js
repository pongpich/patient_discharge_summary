import React, { Component } from 'react';

class Hospital_Header extends React.Component {

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <div className="row">
          <div className="col font-center">
            <h5 className="">โรงพยาบาลราษฎร์ยินดี</h5>
          </div>
        </div>

        <div className="row">
          <div className="col font-center">
            <h5 className="">Rajyindee Hospital</h5>
          </div>
        </div>

        <div className="row">
          <div className="col font-left">
            <label className="">119 ถนนราษฎร์ยินดี อ.หาดใหญ่ จ.สงขลา 90110</label>
          </div>

          <div className="col font-right">
            <label className="margin-right-10p">Tel. 074 200 299</label>
          </div>
        </div>

        <div className="row">
          <div className="col font-left">
            <label className="">119 Rajyindee Rd., Hat Yai, Hat Yai, Songkhla 90110</label>
          </div>

          <div className="col font-right">
            <label className=""></label>
          </div>
        </div>
      </div>
    );
  }
}


export default Hospital_Header;
