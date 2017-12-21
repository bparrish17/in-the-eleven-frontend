import React, { Component } from 'react';
import './singlescore.css';

class SingleTeam extends Component {
  render() {
    const { home, name, img } = this.props;
    let style = home ? { borderBottom: "solid 0.5px #ddd" } : {}
    return (
        <div style={style} className="single-team">
            <div className="single-team-icon">
                <img src={img} className="team-icon-img img-fluid" alt="..."/>
            </div>
            <div className="single-team-name">{name}</div>
        </div>
    );
  }
}

export default SingleTeam;