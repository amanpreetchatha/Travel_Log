import { useState } from "react";
import "./App.css";

function App() {
  const [exitDate,setExitDate] = useState(new Date());
  const [enterDate, setEnterDate] = useState(new Date());

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        
      
        <section>
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
        </section>
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
      </body>
    </html>
  )
}

export default App
