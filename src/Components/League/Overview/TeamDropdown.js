import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './leagueoverview.css';

class TeamDropdown extends Component {
    render() {
        const { teams } = this.props;
        const shorten = (name) => {
            name = name.split(' ').splice(0, 2)
            if(name[name.length-1] === 'FC') {
                name.pop()
            }
            return name.join(' ')
        }
        return (
            <div id="team-dropdown">
                <button
                    id="team-dropdown-button"
                    className="navbar-buttons btn btn-default dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                Browse Teams <span id="category-caret" className="caret" />
                </button>
                <ul id="team-dropdown-menu" className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    {teams.map(team => {
                        return (
                            <li key={team.id} className="single-team-item">
                                <Link to={`/teams/${team.id}`}>{shorten(team.short_name)}</Link>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TeamDropdown;

/*
<img src={team.crest_url} className="img-fluid" alt="..."/>

styling with icon image

.single-team-item {
    margin-bottom: 1%;
}
*/