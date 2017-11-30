import React, { Component } from 'react';
import './singlescore.css';

class SingleTeam extends Component {
  render() {
    const { name, img } = this.props;
    return (
        <div className="single-team">
            <div className="single-team-icon">
                <img src={img} className="team-icon-img img-fluid" alt="..."/>
            </div>
            <div className="single-team-name">{name}</div>
        </div>
    );
  }
}

export default SingleTeam;