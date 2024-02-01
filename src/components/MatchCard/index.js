// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <li className="card-container">
      <img
        className="recent-match-card"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result-tag">{result}</p>
      {matchStatus === 'Won' ? (
        <p className="match-status-won">{matchStatus}</p>
      ) : (
        <p className="match-status-lost">{matchStatus}</p>
      )}
    </li>
  )
}

export default MatchCard
