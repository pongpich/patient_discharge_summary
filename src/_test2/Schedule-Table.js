import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import {cross_data, sort_date} from './database/Cross-Data';
import { dashDateBuddhist } from './calculators/date/Date-Calculator';
// import './css/drawing-canvas/Schedule-Table.css';
// import { getSWPatientInfo } from './axios/TTH-APIs';
import { getEMRImage } from './axios/PHP-APIs';
import { getDashboard, getSWPatientInfo } from './axios/RYH-APIs';

class ScheduleTable extends React.Component {

  constructor() {
    super();

    this.state = {
      url_params: {
        id: null,
        pass: null
      },
      profile_status: {
        profile_id: false
      }
    };
  }

  componentDidMount() {
    console.log("Database -> ", cross_data);
    console.log("Date -> ", sort_date);

    // cross_data.map( (data, index) => {
    //   console.log(data);
    //   Object.keys(data).map( (subdata, subindex) => {
    //     console.log(data[subdata]);
    //     data[subdata].map( (mindata, minindex) => {
    //       console.log(mindata);
    //     });
    //   });
    // });
    // getSWPatientInfo();
    //
    // getEMRImage();

    console.log(this.state);

    if (this.props.match.params.id &&
    this.props.match.params.pass &&
    this.state.profile_status.profile_id === false) {
      this.setState({
        url_params: {
          id: this.props.match.params.id,
          pass: this.props.match.params.pass
        },
        profile_status: {
          profile_id: true
        }
      });
    }

    getDashboard();

    getSWPatientInfo();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.state.profile_status.profile_id === true) {
      this.setState({
        profile_status: {
          profile_id: false
        }
      });
    }

  }

  timelineActive = hexagon => {

    let all_hexagon = document.getElementsByClassName("hexagon");
    let index_hexagon = parseInt(hexagon.target.getAttribute("id"));

    Object.keys(all_hexagon).map( (hexagon, index) => {
      if (index_hexagon === index) {
        // console.log("OK HEX -> ", hexagon);
        all_hexagon[index].className = "display-inline-block cursor-pointer hexagon h-active"
      }
      else {
        // console.log("NOT HEX -> ", index);
        all_hexagon[index].className = "display-inline-block cursor-pointer hexagon h-inactive"
      }
    });

    // hexagon.target.className = "display-inline-block cursor-pointer hexagon h-active"
  }

  tableData = (data, subdata) => {
    // console.log("Table Data -> ", data, subdata);
    let all_table_data = [];
    let add_table_data = 0;
    let object_data = [];

    // console.log(data);
    sort_date.map( (date, dateindex) => {
      add_table_data = 0;

      data[subdata].map( (mindata, minindex) => {
        if (mindata.date === date) {
          add_table_data = 1;
          object_data.push(mindata);
        }
      });

      if (add_table_data === 1) {
        // console.log("Date -> ", date, " OK!");
        // console.log("Object Data -> ", object_data);
        add_table_data = 0
        all_table_data.push(<td key={dateindex}>{object_data.map( (object, index) => <div key={index}>{object.item}</div>)}</td>);
        object_data = [];
      }
      else {
        // console.log("NOT IN DATE -> ", date);
        all_table_data.push(<td key={dateindex}></td>);
      }

    });

    return  all_table_data;
  }

  createTimeline = (number) => {
    let all_timeline = [];
    let timeline_number = parseInt(number);

    for (let object = 0; object < timeline_number; object++) {
      if (object === 0) {
        all_timeline.push(
          <div key={object}
          id={object}
          className="display-inline-block cursor-pointer hexagon h-inactive"
          onClick={this.timelineActive}>
          <span id={object}></span></div>
        );
      }
      else {
        all_timeline.push(
          <div key={"line"+object} className="display-inline-block time-line"></div>
        );
        all_timeline.push(
          <div key={object}
          id={object}
          className="display-inline-block cursor-pointer hexagon h-inactive"
          onClick={this.timelineActive}>
          <span id={object}></span></div>
        );
      }
    }

    return all_timeline;

  }

  render() {

    if (this.state.profile_status.profile_id === true) {
      return <Redirect to="/schedule" />
    }

    return (
      <div>

        <table className="table table-hover">
          <thead>
            <tr>
              {
                sort_date.map( (date, index) =>
                  <th key={index}>{dashDateBuddhist(date)}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              cross_data.map( (data, dataindex) =>
                <tr key={dataindex}>
                  {
                    Object.keys(data).map( (subdata, subindex) =>
                      this.tableData(data, subdata)
                    )
                  }
                </tr>
              )
            }
          </tbody>
        </table>

        <div className="list-group">
          <div className="list-group-item flex-column align-items-start">
            <div className="d-flex w-100">
              {
                this.createTimeline(7)
              }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ScheduleTable;
