// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCards: [], isLoader: true}

  componentDidMount() {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCards: updateData, isLoader: false})
  }

  render() {
    const {teamCards, isLoader} = this.state

    return (
      <div className="bg-container">
        <div className="title-box">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isLoader ? (
          <div testid="loader" className="loader-oval">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="teamcard-container">
            {teamCards.map(eachItem => (
              <TeamCard teamCardDetails={eachItem} key={eachItem.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Home
