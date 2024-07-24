import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capital: 'New Delhi'}

  onDropDownMenuChange = event => {
    this.setState({capital: event.target.value})
  }

  getFilteredCountry = () => {
    const {capital} = this.state
    const filteredCountry = countryAndCapitalsList.filter(eachObj =>
      eachObj.capitalDisplayText
        .toLowerCase()
        .includes(capital.toLocaleLowerCase()),
    )
    return filteredCountry
  }

  render() {
    const filteredCountry = this.getFilteredCountry()
    return (
      <div className="app-container">
        <div className="white-container">
          <h1 className="main-heading"> Countries And Capitals </h1>
          <div className="select-conatiner">
            <select
              className="form-control lists-container"
              onChange={this.onDropDownMenuChange}
            >
              {countryAndCapitalsList.map(eachObj => (
                <option key={eachObj.id} value={eachObj.capitalDisplayText}>
                  {eachObj.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-info"> is capital of which country ?</p>
          </div>

          {filteredCountry.map(eachObj => (
            <p className="country"> {eachObj.country} </p>
          ))}
        </div>
      </div>
    )
  }
}

export default Capitals
