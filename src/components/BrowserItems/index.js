import './index.css'

const BrowserItems = props => {
  const {historyDetails, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-items">
      <div className="list-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="title-domain-delete-container">
          <div className="domain-logo-container">
            <div className="logo-url-con">
              <img src={logoUrl} alt="domain logo" className="logo-img" />
            </div>

            <p className="title-para">{title}</p>
            <p className="domain-url-r-para">{domainUrl}</p>
          </div>

          <div className="delete-container">
            <button
              data-testid="delete"
              type="button"
              className="btn"
              onClick={onDeleteItem}
            >
              <img
                alt="delete"
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                className="delete-img"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BrowserItems
