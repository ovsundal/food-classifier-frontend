import React, {useEffect} from 'react';

function App() {

  useEffect(() => {

    const getData = async () =>  {
      const result = await fetch(URL_ENDPOINT);

      console.log(result);
    }

    getData();
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
