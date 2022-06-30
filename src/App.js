// Functional components
import Content from "./components/Content";
import Selector from "./components/Selector";

// Hooks
import { useState, useEffect } from 'react';

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com';

  const [info, setInfo] = useState([]);
  const [infoSelector, setInfoSelector] = useState('posts');
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${infoSelector}`);
        if (!response.ok) throw Error('Did not receive expected data. Please refresh');
        const listItems = await response.json();
        setInfo(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    }

    fetchItems();
  }, [infoSelector]);

  return (
    <div className="App">
      <Selector infoSelector={infoSelector} setInfoSelector={setInfoSelector}/>
      <Content fetchError={fetchError} info={info}/>
    </div>
  );
}

export default App;