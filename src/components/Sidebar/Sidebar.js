import React, { Component } from 'react';
import * as d3 from 'd3';
import Data from '../../data/sidebar_d3.json';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart()
  }

  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart(){
    const data = Data.data;
    const width= 250;
    const x = d3.scaleLinear().domain([0, d3.max(data, (d) => { return d.num })]).range([0, width]);

    d3.select("#bar").selectAll("div").data(data).enter().append("div").attr("class", "sidebar__data-bar").style("width", function (d) {
      const number = d.num;
      return x(number) + "px";
    }).text(function (d) {
      const weather = d.text + ': ' + d.num;
      return weather;
    }).append("i").attr("class", "fa fa-sun-o sidebar__sun-icon");
  }

  render() {
    return(
      <div className="sidebar">
        <h2 className="sidebar__title">Cat-U-Weather Forecast</h2>
        <div id="bar" className="sidebar__container"/>
      </div>
    );
  }
}

export default Sidebar;