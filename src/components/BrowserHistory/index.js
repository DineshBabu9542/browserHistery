import {Component} from 'react'

import './index.css'

import BrowserItems from '../BrowserItems/index'

class BrowserHistory extends Component {
  state = {searchInput: '', inputList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props

    this.setState({inputList: initialHistoryList})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteTodo = id => {
    const {inputList} = this.state

    const updatedDeleteHistory = inputList.filter(
      eachTodo => eachTodo.id !== id,
    )
    this.setState({
      inputList: updatedDeleteHistory,
    })
  }

  filterLists = () => {
    const {searchInput, inputList} = this.state

    const searchResults = inputList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchResults
  }

  render() {
    const {searchInput} = this.state

    const filterLists = this.filterLists()

    return (
      <div className="container">
        <div className="bg-white-con">
          <div className="bg-blue-color">
            <div className="history-con">
              <img
                alt="app logo"
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
                className="app-logo"
              />
              <div className="search-con">
                <div className="icon-container">
                  <img
                    className="search-icon"
                    alt="search"
                    src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search history"
                    value={searchInput}
                    onChange={this.onChangeInput}
                  />
                </div>
              </div>
            </div>
          </div>
          {filterLists.length === 0 ? (
            <p className="clear-history">There is no history to show</p>
          ) : (
            <div className="random-bg-con">
              <ul>
                {filterLists.map(eachHistory => (
                  <BrowserItems
                    key={eachHistory.id}
                    historyDetails={eachHistory}
                    deleteTodo={this.deleteTodo}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
