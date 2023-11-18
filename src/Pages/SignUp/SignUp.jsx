import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import bg from "../../assets/others/authentication.png";
import bg2 from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialMediaLogin from "../../Components/SocialMediaLogin/SocialMediaLogin";
import swal from "sweetalert";
const SignUp = () => {
  const { userProfileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, userLogOut } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        userProfileUpdate(data.name, data.photourl);

        userLogOut().then(() => {
          swal("Wow!", "Successfully User Created", { icon: "success" });
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div
      className="max-w-screen min-h-screen py-10"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="max-w-5xl mx-auto shadow-xl rounded-xl border p-14">
        <h2 className="text-4xl my-5 font-semibold text-center">Sign Up</h2>
        <div className="grid grid-cosl-1 lg:grid-cols-2 items-center gap-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="firstName">
                <span className="label">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                className="input input-bordered input-md"
                id="name"
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="photourl">
                <span className="label">Photo URL</span>
              </label>
              <input
                {...register("photourl", { required: true })}
                className="input input-bordered input-md"
                id="photourl"
              />
              {errors.photourl?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Photo Url is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="email">
                <span className="label">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered input-md"
                id="email"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="password">
                <span className="label">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                })}
                className="input input-bordered input-md"
                id="password"
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Password is required
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <ul
                  role="alert"
                  className="text-red-600"
                  style={{ listStyleType: "disc" }}
                >
                  <li>Password must be 6 Character</li>
                  <li>at least 1 numeric character</li>
                  <li>at least 1 lowercase letter</li>
                  <li>at least 1 uppercase letter</li>
                  <li>at least 1 special character</li>
                </ul>
              )}
            </div>
            <div className="form-control mt-4">
              <input
                type="submit"
                value={"Sign up"}
                className="btn btn-error btn-block"
              />
            </div>
            <div className="form-control mt-3 text-center">
              <p className="mt-3">
                Aready have an Account? Please{" "}
                <Link className="text-blue-500" to="/signin">
                  Sign in
                </Link>
              </p>
              <p>Continue with</p>
              <SocialMediaLogin />
            </div>
          </form>
          <img
            src={bg2}
            alt=""
            className="order-first lg:order-last"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
