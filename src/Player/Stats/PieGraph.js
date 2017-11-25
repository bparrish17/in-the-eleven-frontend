import React, { Component } from 'react'
import './stats.css'
import './pieGraph.css'
import '../../App.css'

class PieGraph extends Component {
    render() {
        const {color, stat, label, value, align} = this.props
        const alignGraph = { float: align }
        return (
            <div className={"c100 p" + value} style={alignGraph}>
                <span>{value}%</span>
                <div className="slice">
                    <div className="bar" style={color}></div>
                    <div className="fill" style={color}></div>
                </div>
            </div>
        );
  }
}

export default PieGraph;