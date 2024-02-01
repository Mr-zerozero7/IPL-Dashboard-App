// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
    manOfTheMatch,
  } = latestMatchData
  const {result, date, umpires, venue} = latestMatchData

  return (
    <div className="match-data">
      <div className="short-data">
        <p className="competing-team-name">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="competing-image-box">
        <img
          className="competing-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="detail-data">
        <p>{umpires}</p>
        <p>{firstInnings}</p>
        <p>{secondInnings}</p>
        <p>{matchStatus}</p>
        <p>{manOfTheMatch}</p>
      </div>
    </div>
  )
}

export default LatestMatch
