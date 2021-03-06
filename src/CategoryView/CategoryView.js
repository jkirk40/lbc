import {useState} from 'react';

import CityMenu from './Children/CityMenu';
import Category from './Children/Category';

function CategoryView(props) {
  const [activeCity, setActiveCity] = useState('Tokyo');
  const [sortByIndex, setSortByIndex] = useState(true);

  const toggleSort = () => {
    setSortByIndex(!sortByIndex);
  }

  const filterCategoryData = (id) => {
    const filteredArray = props.data.series.filter((obj) => {return obj.name === activeCity})
    const cityData = filteredArray[0];
    const numForGivenMonth = cityData.data[id];
    return numForGivenMonth;
  }

  const getCategoryList = () => {
    const list = props.data.categories.map((cat, index) => {
      return (
        <Category 
          key={index}
          num={filterCategoryData(index)}
          cat={cat}
          activeCity={activeCity}
        />
      )
    })
    
    let sortedList;
    if (sortByIndex) {
      sortedList = list.sort((a, b) => {return a.props.index - b.props.index})
    } else {
      sortedList = list.sort((a, b) => {return a.props.num - b.props.num})
    }
    return sortedList
  }

  return (
    <div className="CategoryView">
      <p>Active City: {activeCity}</p>
      <CityMenu data={props.data} setActiveCity={setActiveCity}/>
      <ul>
        {getCategoryList()}
      </ul>
      <button onClick={toggleSort}>
        Toggle Sort Mode
      </button>
    </div>
  );
}

export default CategoryView;
