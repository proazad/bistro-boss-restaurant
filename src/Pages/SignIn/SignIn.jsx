import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMediaLogin from "../../Components/SocialMediaLogin/SocialMediaLogin";
import bg from "../../assets/others/authentication.png";
import bg2 from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const SignIn = () => {
  const { userSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSignInWithEmailAndPass = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email").trim();
    const password = form.get("password").trim();

    userSignIn(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in Successfull",
          showConfirmButton: false,
          timer: 2300,
        });
        navigate(from);
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong, user Credential don't match",
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };
  return (
    <div
      className="max-w-screen min-h-screen py-10"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="max-w-5xl mx-auto shadow-xl rounded-xl border p-14">
        <h2 className="text-4xl my-5 font-semibold text-center">Sign In</h2>
        <div className="grid grid-cosl-1 lg:grid-cols-2 items-center gap-5">
          <form
            onSubmit={handleSignInWithEmailAndPass}
            className="order-last lg:order-fast"
          >
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered input-ghost bg-white"
              />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input input-bordered input-ghost bg-white"
              />
              <Link to="/forgotpassword" className="mt-1 text-blue-600">
                Forgot Password?
              </Link>
            </div>
            <div className="form-control mt-3 text-center">
              <input type="submit" value="Sign in" className="btn btn-error" />
              <p className="mt-3">
                New User? Please{" "}
                <Link className="text-blue-500" to="/signup">
                  Sign up
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

export default SignIn;
