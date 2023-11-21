import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useMenu from "../../../../hooks/useMenu";
import PageTitle from "../../PageTitle/PageTitle";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  if (loading) {
    return "Data Loading......";
  }
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} Deleted Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  const handleUpdateItem = (item) => {};
  return (
    <div className="w-full px-10">
      <PageTitle
        heading={"Manage All Items"}
        subheading={"Hurry up"}
      ></PageTitle>
      <div className="flex justify-between">
        <h2 className="text-3xl">All Menu</h2>
        <h2 className="text-3xl">Total Menu:{menu.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu?.map((item, index) => (
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
                <td>{item.price}</td>
                <td>
                  {item?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleUpdateItem(item)}
                      className="btn btn-md bg-[#D1A054]"
                    >
                      <FaEdit className="text-white text-3xl"></FaEdit>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-md btn-error"
                  >
                    <MdDeleteForever className="text-white text-3xl"></MdDeleteForever>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
