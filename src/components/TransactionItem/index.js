// Write your code here

import './index.css'

const TransactionItem = props => {
  const {item, deleteThis} = props
  const {title, amount, type, id} = item

  const deleteTransaction = () => {
    deleteThis(id, amount, type)
  }

  return (
    <div className="row-div">
      <div className="inner-div">
        <p className="row-value">{title}</p>
        <p className="row-value">Rs {amount}</p>
        <p className="row-value">{type}</p>
      </div>
      <button
        type="button"
        className="del-btn"
        onClick={deleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </div>
  )
}

export default TransactionItem
