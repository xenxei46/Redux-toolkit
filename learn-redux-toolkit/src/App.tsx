// import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import './App.css'

import { useAppDispatch, useAppSelector } from './hooks';
import { incremented, amountAdded } from './features/counter/conter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-slice-api';
import { useState } from 'react';


function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10)
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    //increment by one
    // dispatch(incremented());
    
    //increment by a fixed amount
    dispatch(amountAdded(3));
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
          </select>
        </div>
        <div>
          <p>Number of dogs fetched: { data.length } </p>

          <div>
            {/* <p> Dogs to fetch:</p>
            <select value={numDogs} onChange={() => }>

            </select> */}
          </div>
          <table>
            <thead></thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            <tbody></tbody>
             {data?.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>           
              </tr>
             ))}
          </table>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;
 