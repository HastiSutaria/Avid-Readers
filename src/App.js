import React from 'react'
import Books from './components/Books'
import Header from './components/Header'

const App = () => {
  return (
    <div className='rec'>
     <Header/>
     <div className='inner'>
     Top 10 All-Time-Fav Books
     <br></br>
     <Books/>
     </div>
     
    </div>
  )
}

export default App