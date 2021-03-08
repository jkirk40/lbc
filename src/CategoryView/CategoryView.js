import {useState} from 'react';

import CityMenu from './Children/CityMenu';
import Category from './Children/Category';

import './CategoryView.scss';

function CategoryView(props) {
  const [activeCity, setActiveCity] = useState('Tokyo');
  const [sortByIndex, setSortByIndex] = useState(true);

  const toggleSort = () => {
    setSortByIndex(!sortByIndex);
  }

  const getClassName = () => {
    let className = "CategoryView ";
    const city = activeCity.replace(/\s/g, '');
    className += city;
    return className;
  }

  const getCategoryList = () => {
    const filterCategoryData = (month) => {
      // Remove all objects from the series array which are not the active city
      const filteredArray = props.data.series.filter((obj) => {return obj.name === activeCity})
      const cityData = filteredArray[0];
      // Select current month data for this city
      const numForGivenMonth = cityData.data[month];
      return numForGivenMonth;
    }

    // This creates an array with one component for each month.
    // Each category component gets a num prop which is
    // the relevant data for that month according to the active city state.
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
    
    // Sort the array either by the default month index or by the number value
    let sortedList;
    if (sortByIndex) {
      sortedList = list.sort((a, b) => {return a.props.index - b.props.index})
    } else {
      sortedList = list.sort((a, b) => {return a.props.num - b.props.num})
    }
    return sortedList
  }

  return (
    <div className={getClassName()}>
      <p>Active City: {activeCity}</p>
      <CityMenu data={props.data} setActiveCity={setActiveCity}/>
      <ul>
        {getCategoryList()}
      </ul>
      <button onClick={toggleSort}>
        {sortByIndex ? 'Sort By Amount' : 'Sort By Month'}
      </button>
    </div>
  );
}

export default CategoryView;
