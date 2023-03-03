import React, { useEffect, useState } from 'react';
import { readData, readBin } from './utils';
import "./styles/main.css"

function App() {

  const [bins, setBins] = useState([])
  const [randomUser, setRandomUser] = useState({})

  useEffect(() => {
    readData()
    .then((res) => {
      setBins(res)
    }) 
  }, [])

  const getRandomUser = () => {
    // Generate a random index between 0 and bins.length - 1
    const randomIndex = Math.floor(Math.random() * bins.length);

    // Use the random index to select a random element from the array
    const randomElement = bins[randomIndex];

    readBin(randomElement.record)
    .then((res) => {
      setRandomUser(res.record)
    })
  }

  console.log(randomUser)

  return (
    <div className="App min-h-screen min-w-full">
      <div className='h-screen p-4 flex items-center justify-center flex flex-col'>

        <button 
              className='my-4 w-60 px-2 py-4 border-2 border-black rounded fade-in'
              onClick={getRandomUser}
          >
              Get Random User
        </button>

        {Object.keys(randomUser).length !== 0 ? (
          // Render user info if user object is not empty
          <div className='p-8'>
            <h2>User Info</h2>
            <p>Name: {randomUser.fullName}</p>
            <p>Email: {randomUser.email}</p>
          </div>
        ) : (
          // Render message if user object is empty
          <p>No user info available.</p>
        )}

        <div className='flex flex-col'>
          <div>Number of Users: </div>
          <div className='text-center text-bold text-3xl'>{bins.length}</div>
        </div>

      </div>
    </div>
  );
}

export default App;
