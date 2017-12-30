import React, { Component } from 'react';
import './teamoverview.css';

class TeamOverview extends Component {
    render() {
        const { team } = this.props;
        return (
            <div id="team-header"className="jumbotron jumbotron-fluid">
                <div id="team-image-container">
                <img id="team-image" src={team.crest_url} alt="..." />
                </div>
                <div id="team-overview">
                    <h2 id="team-name" className="display-3">{team.name}</h2>
                </div>
            </div>
        );
    }
}

export default TeamOverview;


// <div id="team-header"className="jumbotron jumbotron-fluid">
//         <div id="team-header-container" className="container">
//             <div id="team-image-container">
//                 <img id="team-image" src={team.crest_url} alt="..." />
//             </div>
//             <div id="team-info-container">
//                 <h2 id="team-name" className="display-3">{team.name}</h2>
//             </div>
//         </div>
//     </div>