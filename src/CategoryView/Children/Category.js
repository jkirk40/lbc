import './Category.scss';

function Category(props) {
  return (
    <div className="Category">
      <p><span>{props.cat}</span> <span>{props.num}</span></p>
    </div>
  );
}
  
export default Category;
    