import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import userAxiosPublic from "../../../../hooks/userAxiosPublic";
import PageTitle from "../../PageTitle/PageTitle";
import Swal from "sweetalert2";
const image_api_secret = import.meta.env.VITE_IMAGE_API_SECRET;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_api_secret}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = userAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_upload_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        price: parseFloat(data.price),
        recipe: data.recipe,
        category: data.category,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} Added Successfull`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };
  return (
    <div className="w-full px-10">
      <PageTitle heading={"Add An Item"} subheading={"What's New"} />
      <div className="bg-[#F3F3F3] px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Recipe Name <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex gap-6">
            {/* Categroy  */}
            <div className="form-control w-full my-3">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Category <span className="text-red-600">*</span>
                </span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="default">Select Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            {/* Price  */}
            <div className="form-control w-full my-3">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Price <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Recipe Details
                <span className="text-red-600">*</span>
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Image
                <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </div>
          <div className="from-control mt-3">
            <button type="submit" className="btn btn-error">
              Add Item <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
