import { useState } from 'react'
import Axios from 'axios'

import './App.css'

function App () {
  const [counrtyName, setCountryName] = useState('')
  const [data, setData] = useState('')

  const fetchCountry = name => {
    Axios.get(`https://restcountries.com/v2/name/${name}`).then(res => {
      console.log(res.data[0])
      setData(res.data[0])
    })
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='search'>
          <input
            type='text'
            placeholder='Ex. India'
            onChange={e => setCountryName(e.target.value)}
          />
          <button onClick={() => fetchCountry(counrtyName)}>Search</button>
        </div>

        <div className='card'>
          <img src={data?.flag} alt={data?.name} />
          {data ? (
            <div className='card-text'>
              <h3>
                Country Name: <span>{data?.name}</span>
              </h3>
              <h3>
                Languages: <span>{data?.languages[0].name}</span>
              </h3>
              <h3>
                Currency: <span>{data?.currencies[0].code}</span>
              </h3>
              <h3>
                Borders: <span>{data.borders?.join(', ')}</span>
              </h3>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default App
