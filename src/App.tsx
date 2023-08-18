// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useFireproof } from '@fireproof/react'

function App() {
  const { database, useLiveQuery } = useFireproof('legendary')
  const sorted = useLiveQuery('sort', {limit : 10})
  console.log(database)
  console.log(sorted)

  return (
    <>
      <button onClick={() => database.put({ sort: Math.random() })}>db stuff</button>
      <ul>
        {sorted.rows.map((row) => <li key={row.id}>
          {row.key}
        </li>)}
      </ul>
    </>
  )
}

export default App
