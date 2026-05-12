import { useState } from "react";

function App() {
  const [exitDate,setExitDate] = useState(new Date());
  const [enterDate, setEnterDate] = useState(new Date());

  return (
    <>
      <header>
        <h3>Select an option: </h3>
        <button
          type="button"
          className="exit"
          onClick={() => setExitDate(new Date())}
        >
          Exited Canada
        </button>

        <button
          type="button"
          className="enter"
          onClick={() => setEnterDate(new Date())}
        >
          Entered Canada
        </button>
      </header>
      <section>
        <h3>Travel history</h3>
        <table>
          <thead>
            <tr>
              <th>Exit Date</th>
              <th>Enter Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{exitDate.toLocaleDateString()}</td>
              <td>{enterDate.toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default App
