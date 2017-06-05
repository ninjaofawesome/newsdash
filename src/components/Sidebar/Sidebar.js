import React, { Component } from 'react';
import * as d3 from 'd3';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
// import { select } from 'd3-selection';
import Data from './sidebar_d3.json';

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
    //todo: data formatting incorrect. :/
    const data = Data;
    const width= 300;
    const node = this.node
    const dataMax = max(data, (d) => { return d.num })
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, width])
      d3.select(node).selectAll('rect').data(data).enter().append('rect')

      d3.select(node).selectAll('rect').data(data).exit().remove()

      d3.select(node).selectAll('rect').data(data).style('fill', '#fe9922').attr('x', (d,i) => i * 25).attr('y', d => width - yScale(d)).attr('height', d => yScale(d)).attr('width', 25)
  }

  render(){
    return(
      <div className="sidebar">
        <h2 className="sidebar__title">Your Cat-U-Weather Forecast</h2>
        <svg
          ref={node => this.node = node}
          width={300}
          height={250}
        />
      </div>
    );
  }
}

export default Sidebar;