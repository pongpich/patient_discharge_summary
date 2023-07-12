import React, { Component } from 'react';
// import socketIO from '../../../products-server/node_modules/socket.io';
// var socketIO = require('socket.io');
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:8888';
const socket = socketIOClient(ENDPOINT);

class SocketSample extends React.Component {

  constructor() {
    super();

    this.state = {
      response_data: [],
      message: ""
    };
  }

  componentDidMount() {

    socket.on('HelloServer', data => {
      console.log("Response Data -> ", data);
      this.setState({
        response_data: [...this.state.response_data, data]
      });
    });

    socket.on('HI', data => {
      console.log("HI DATA -> ", data);
    });

  }

  inputChange = event => {
    this.setState({
      message: event.target.value
    });
  }

  funcMessageSubmit = event => {
    event.preventDefault();
    console.log("SUBMIT!!!");
    console.log(this.state.message);

    // const input_message_element = document.getElementById("input_message");
    // console.log(input_message_element);

    socket.emit('Chat Message', this.state.message);
    this.setState({
      message: ''
    });

    socket.on('Chat Message', receive_message => {
      console.log("Receive -> ", receive_message);
      this.setState({
        response_data: [...this.state.response_data, receive_message]
      });
    });

    console.log("STATE -> ", this.state.response_data);
  }

  render() {

    return (
      <div>
        <h1>HELLO REACT!</h1>
        <ul id="messages"></ul>
        <form action="" onSubmit={this.funcMessageSubmit}>
          <input id="input_message" autoComplete="off"
            onChange={this.inputChange} value={this.state.message}  />
          <button>Send</button>
        </form>
        <div>
          {this.state.response_data.map(
            (res_data, index) => <h4 key={index}>{res_data}</h4>
          )}
        </div>
      </div>
    );
  }
}

export default  SocketSample;
