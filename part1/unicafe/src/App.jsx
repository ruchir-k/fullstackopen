import { useState } from 'react'

const StatisticLine = ({text, counter, postSymbol}) => {

  return(
    <tr>
      <td>{text}</td>
      <td>{counter} {postSymbol}</td>
    </tr>
  )
}

const Button = ({text, setCounter}) => {

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return(
    <button onClick={incrementCounter}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentagePositive = (good / total) * 100

  if(total == 0) {
    return(
      <div>No feedback given</div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
        <StatisticLine text={"good"} counter={good} />
        <StatisticLine text={"neutral"} counter={neutral} />
        <StatisticLine text={"bad"} counter={bad} />
        <StatisticLine text={"all"} counter={total} />
        <StatisticLine text={"average"} counter={average} />
        <StatisticLine text={"positive"} counter={percentagePositive} postSymbol={"%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} setCounter={setGood} />
      <Button text={"neutral"} setCounter={setNeutral} />
      <Button text={"bad"} setCounter={setBad} />
      <h1>statistics</h1>
      <Statistics {...feedback} />
    </div>
  )
}

export default App