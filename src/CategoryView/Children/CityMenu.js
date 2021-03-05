function CityMenu(props) {
  const handleClick = (city) => {
    props.setActiveCity(city);
  }

  return (
    <div className="CityMenu">
      {props.data.series.map((city, index) => {
        return (
          <button onClick={()=> handleClick(city.name)} key={index}>
            {city.name}
          </button>
        )
      })}
    </div>
  );
}
  
export default CityMenu;
  