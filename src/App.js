import {useState, useEffect} from 'react';

import CategoryView from './CategoryView/CategoryView';

import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://www.lbcit.ca/demo/api/?key=d9658b9d-4f86-491f-bd67-86af0c547a5c')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setData(data);
    })
  }, [])

  // Render a loading screen if there is no proper data to pass down
  if (!data.categories) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <CategoryView data={data} />
    </div>
  );
}

export default App;
