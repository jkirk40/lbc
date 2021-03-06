import {useState} from 'react';

import CityMenu from './Children/CityMenu';
import Category from './Children/Category';

function CategoryView(props) {
  const [activeCity, setActiveCity] = useState('Tokyo');

  const filterCategoryData = (id) => {
    const filteredArray = props.data.series.filter((obj) => {return obj.name === activeCity})
    const cityData = filteredArray[0];
    const numForGivenMonth = cityData.data[id];
    return numForGivenMonth;
  }

  const getCategoryList = () => {
    return <>
      {props.data.categories.map((cat, index) => {
        return (
          <Category 
            key={index}
            num={filterCategoryData(index)}
            cat={cat}
            activeCity={activeCity}
          />
        )
      })}
    </>
  }

  if (!props.data.categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CategoryView">
      <p>Active City: {activeCity}</p>
      <CityMenu data={props.data} setActiveCity={setActiveCity}/>
      <ul>
        {getCategoryList()}
      </ul>
    </div>
  );
}

export default CategoryView;
