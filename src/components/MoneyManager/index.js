import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

console.log(transactionTypeOptions)
// Write your code here

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    transaction: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getType = event => {
    this.setState({type: event.target.value})
  }

  gotIncome = amount => {
    this.setState(prevState => ({
      balance: parseInt(prevState.balance) + parseInt(amount),
      income: parseInt(prevState.income) + parseInt(amount),
    }))
  }

  gotExpenses = amount => {
    this.setState(prevState => ({
      balance: parseInt(prevState.balance) - parseInt(amount),
      expenses: parseInt(prevState.expenses) + parseInt(amount),
    }))
  }

  deleteThis = (id, amount, type) => {
    console.log(type)
    if (type === 'Income') {
      this.setState(prevState => ({
        balance: parseInt(prevState.balance) - parseInt(amount),
        income: parseInt(prevState.income) - parseInt(amount),
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        balance: parseInt(prevState.balance) + parseInt(amount),
        expenses: parseInt(prevState.expenses) - parseInt(amount),
      }))
    }
    this.setState(prevState => ({
      transaction: prevState.transaction.filter(eachItem => eachItem.id !== id),
    }))
  }

  getSubmitted = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    console.log(type)
    if (type === 'INCOME') {
      this.gotIncome(amount)
    } else if (type === 'EXPENSES') {
      this.gotExpenses(amount)
    }
    console.log(type)
    if (title !== '' && amount !== '' && type !== '') {
      const typeOption = transactionTypeOptions.find(
        eachItem => eachItem.optionId === type,
      )
      const {displayText} = typeOption
      const newTransaction = {id: uuidV4(), title, amount, type: displayText}
      this.setState(prevState => ({
        transaction: [...prevState.transaction, newTransaction],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
      }))
    }
  }

  render() {
    const {
      balance,
      income,
      expenses,
      transaction,
      title,
      amount,
      type,
    } = this.state

    return (
      <div className="app-div">
        <div className="info-div">
          <p className="name">Hi, Richard</p>
          <p className="description">
            Welcome back to your <span className="app-name">Money Manager</span>
          </p>
        </div>
        <ul className="money-div">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </ul>
        <div className="bottom-div">
          <div className="transaction-div">
            <h1 className="form-head">Add Transaction</h1>
            <form className="form" onSubmit={this.getSubmitted}>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="input"
                onChange={this.getTitle}
                value={title}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="input"
                onChange={this.getAmount}
                value={amount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                id="type"
                className="input"
                value={type}
                onChange={this.getType}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-div">
            <h1 className="history-head">History</h1>
            <div className="t-head-div">
              <div className="in-div">
                <p className="t-head">Title</p>
                <p className="t-head">Amount</p>
                <p className="t-head">Type</p>
              </div>
              <p className="dummy"> </p>
            </div>
            {transaction.map(eachItem => (
              <TransactionItem
                item={eachItem}
                key={eachItem.id}
                deleteThis={this.deleteThis}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
