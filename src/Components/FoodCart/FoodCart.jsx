// eslint-disable-next-line react/prop-types
const FoodCart = ({ food }) => {
  // eslint-disable-next-line react/prop-types
  const { image, title, recipe, price } = food;
  return (
    <div className="bg-base-200 relative">
      <img src={image} alt="" />
      <span className="bg-neutral px-2 text-white py-1 absolute top-2 right-2 font-medium">${price}</span>
      <div className="text-center p-5">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-lg my-3">{recipe}</p>
        <button className="btn btn-outline btn-warning border-0 border-b-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
