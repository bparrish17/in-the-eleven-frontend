import React, { Component } from 'react'
import SingleTeam from './SingleTeam'
import Time from './Time'
import Score from './Score'
import LineupPlayer from './LineupPlayer'
import './singlescore.css'

class SingleScore extends Component {
  render() {
    const { match } = this.props;
    return (
      <div id="single-score-container">
        { match.played
            ? <Score home={match.home.goals} away={match.away.goals} time={match.time}/>
            : <Time time={match.time} />
        }
        <div id="teams-container">
            <SingleTeam home={true} name={match.home.name} img={match.home.img} />
            <SingleTeam home={false} name={match.away.name} img={match.away.img} />
        </div>
      </div>
    );
  }
}

export default SingleScore

// const { team } = this.props
// return (
//   <div id="single-score-container">
//     { match.played
//         ? <Score home={match.home.goals} away={match.away.goals} time={match.time}/>
//         : <Time time={match.time} />
//     }
//     <div id="teams-container">
//         <SingleTeam home={true} name={team.name} img={team.crest_url} />
//         <SingleTeam home={false} name={team.name} img={team.crest_url} />
//     </div>
//   </div>
// )