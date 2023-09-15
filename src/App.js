
import './App.css';

function App() {
  const data = [
    {forename: 'John', surname: 'Doe'},
    {forename: 'Jane', surname: 'Doe'}
  ];

  return (
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>Imie</th>
          <th>Nazwisko</th>
        </tr>
        </thead>
        <tbody>
        {data.map(({forename, surname}, i) => (
            <tr>
              <td>{i+1}</td>
              <td>{forename}</td>
              <td>{surname}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
}

export default App;

