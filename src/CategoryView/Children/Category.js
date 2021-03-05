function Category(props) {
  const getCategoryData = () => {
    const filteredArray = props.data.series.filter((obj) => {
      if (obj.name === props.activeCity) {
        return true;
      }
      return false;
    })
    const cityData = filteredArray[0];
    const numForGivenMonth = cityData.data[props.id];
    return numForGivenMonth;
  }

  return (
    <div className="Category">
      <div>{props.cat} {getCategoryData()}</div>
    </div>
  );
}
  
export default Category;
    