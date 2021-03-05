function CategoryView(props) {

  if (!props.data.categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CategoryView">
      {props.data.categories.map((cat, index) => {
        return (
          <p key={index}>{cat}</p>
        )
      })}
    </div>
  );
}

export default CategoryView;
