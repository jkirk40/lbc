import {useState} from 'react';

import CityMenu from './Children/CityMenu';
import Category from './Children/Category';

function CategoryView(props) {
  const [activeCity, setActiveCity] = useState('Tokyo');

  if (!props.data.categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CategoryView">
      <p>Active City: {activeCity}</p>
      <CityMenu data={props.data} setActiveCity={setActiveCity}/>
      {props.data.categories.map((cat, index) => {
        return (
          <Category 
            key={index}
            id={index}
            data={props.data}
            cat={cat}
            activeCity={activeCity}
          />
        )
      })}
    </div>
  );
}

export default CategoryView;
