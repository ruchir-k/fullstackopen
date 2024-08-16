import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const MostVoted = ({anecdotes, points}) => {
  let highestIdx = 0
  let maxPoints = 0

  for(let i=0; i < anecdotes.length; i++) {
    if(points[i] > maxPoints) {
      highestIdx = i
      maxPoints = points[i]
    }
  }

  if(maxPoints == 0) {
    return(
      <></>
    )
  }

  return(
    <>
      <h1>Anectode with most votes</h1>
      <div>
        {anecdotes[highestIdx]}
      </div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  return (
    <div>
      <h1>Anectode of the day</h1>
      <div>
      {anecdotes[selected]}
      </div>
      <div>
        has {points[selected]} votes
      </div>
      <div>
        <button onClick={() => {
          const copy = {...points}
          copy[selected] += 1
          setPoints(copy)
        }}>vote</button>
        <button onClick={() => {
          setSelected(getRandomInt(anecdotes.length))
        }}>next anecdote</button>
      </div>
      <MostVoted anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App