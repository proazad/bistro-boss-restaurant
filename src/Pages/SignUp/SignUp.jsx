import { Link } from "react-router-dom";
import bg from "../../assets/others/authentication.png";
import bg2 from "../../assets/others/authentication2.png";
const SignUp = () => {
  return (
    <div
      className="w-screen h-screen py-10"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="max-w-5xl mx-auto shadow-xl rounded-xl border p-14">
        <h2 className="text-4xl">Sign Up</h2>
        <div className="grid grid-cosl-1 lg:grid-cols-2 items-center gap-5">
          <form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input input-bordered input-ghost bg-white"
              />
            </div>
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
            </div>
            <div className="form-control mt-3 text-center">
              <input
                type="submit"
                value="Sign up"
                className="btn btn-warning"
              />
              <p className="mt-3">
                New User? Please <Link className="text-blue-500" to="/signin">Sign in</Link>
              </p>
              <p>Continue with</p>
            </div>
          </form>
          <img src={bg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
