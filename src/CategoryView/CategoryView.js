import {useState} from 'react';

import CityMenu from './Children/CityMenu';

function CategoryView(props) {
  const [activeCity, setActiveCity] = useState('Toyko');

  if (!props.data.categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CategoryView">
      <p>Active City: {activeCity}</p>
      <CityMenu data={props.data} setActiveCity={setActiveCity}/>
      {props.data.categories.map((cat, index) => {
        return (
          <p key={index}>{cat}</p>
        )
      })}
    </div>
  );
}

export default CategoryView;
