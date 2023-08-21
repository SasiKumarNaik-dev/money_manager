// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <li className="list bl-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="img-styles"
        />
        <div className="content">
          <p className="para">Your Balance</p>
          <p className="output" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="list in-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="img-styles"
        />
        <div className="content">
          <p className="para">Your Income</p>
          <p className="output" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="list ex-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="img-styles"
        />
        <div className="content">
          <p className="para">Your Expenses</p>
          <p className="output" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
