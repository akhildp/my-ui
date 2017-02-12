import React, { Component } from 'react';
import { observer } from 'mobx-react';
var Forecast = require('react-forecast');
import $ from 'jquery';

const Weather = observer(class Weather extends Component {
    constructor(props){
    super(props)
    }
    componentDidMount() {
        $.get("https://ipinfo.io", (response)=>{
                this.props.store.update(response)
                }, "jsonp");
        }
    render() {
    return (
      <div className="App">
       {this.props.store.city ? (<Forecast latitude={this.props.store.lat} longitude={this.props.store.lon} name={this.props.store.city}/>) : <div/>}
      </div>
    );
  }
});

export default Weather;
