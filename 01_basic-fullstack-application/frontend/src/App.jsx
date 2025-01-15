import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then(res => {
      // console.log(res)
      setJokes(res.data)
      // console.log(setJokes, 'set jokes state');
      
    })
    .catch(e => {
      console.log(e);
    }) 
  },[])

  return (
    <>
      <h1>Basic fullstack setup</h1>
      <h1>NO OF JOKES : {jokes.length}</h1>

      {jokes.map(joke => (
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
