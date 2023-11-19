import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
const FoodCart = ({ food }) => {
  const { image, name, recipe, price } = food;
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddtoCart = (item) => {
    if (user) {
      const fooditem = {
        foodid: item._id,
        image: image,
        name: name,
        price: price,
        userid: user._id,
        useremail: user.email,
      };
      axiosSecure
        .post("/carts", fooditem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add to Cart Successfull",
              text: `${item.name}`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="bg-base-200 relative">
      <img src={image} alt="" />
      <span className="bg-neutral px-2 text-white py-1 absolute top-2 right-2 font-medium">
        ${price}
      </span>
      <div className="text-center p-5">
        <h3 className="text-2xl">{name}</h3>
        <p className="text-lg my-3">{recipe}</p>
        <button
          onClick={() => handleAddtoCart(food)}
          className="btn btn-outline btn-warning border-0 border-b-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
FoodCart.propTypes = {
  food: PropTypes.object,
};
export default FoodCart;
