import {useEffect} from 'react';

import './App.css';

function App() {
  useEffect(() => {
    fetch('https://www.lbcit.ca/demo/api/?key=d9658b9d-4f86-491f-bd67-86af0c547a5c')
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((data) => {
      console.log(data)
    })
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
