import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import PageTitle from "../PageTitle/PageTitle";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
  const handleDeleteCartItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="px-10 w-full">
      <PageTitle subheading={"My Cart"} heading={"Wanna Add More ?"} />
      <div className="overflow-x-auto mt-10 bg-white">
        <div className="flex justify-between p-4">
          <h2 className="text-3xl">Total Orders: {cart.length}</h2>
          <h2 className="text-3xl">Total Price: ${totalPrice.toFixed(2)}</h2>
          {cart.length === 0 ? (
            <button disabled className="btn btn-primary">
              Pay
            </button>
          ) : (
            <Link to="/dashboard/payment" className="btn btn-primary">
              Pay
            </Link>
          )}
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteCartItem(item._id)}
                    className="btn btn-ghost btn-md"
                  >
                    <MdDeleteOutline className="text-2xl text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
