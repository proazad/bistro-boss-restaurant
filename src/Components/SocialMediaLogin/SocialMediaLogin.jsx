import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import userAxiosPublic from "../../hooks/userAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialMediaLogin = () => {
  const { userSignInWithGoogle } = useAuth();
  const axiosPublic = userAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    userSignInWithGoogle()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photo: res?.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res?.data?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Created Successfully",
              showConfirmButton: false,
              timer: 2500,
            });
            navigate("/");
          }
        });
      })
      .catch((error) => console.log("User Already Exist", error.message));
  };
  const handleFacebookSignIn = () => {
    Swal.fire(
      "Oops!",
      "This Sign in not available at this time plese try again with Google or Others",
      { icon: "info" }
    );
  };
  return (
    <div className="flex items-center justify-center my-3 gap-5">
      <FcGoogle
        onClick={handleGoogleSignIn}
        className="text-3xl cursor-pointer"
      />
      <FaFacebook
        onClick={handleFacebookSignIn}
        className="text-3xl cursor-pointer text-blue-700"
      />
      <FaGithub
        onClick={handleFacebookSignIn}
        className="text-3xl cursor-pointer text-neutral"
      />
      <FaInstagram
        onClick={handleFacebookSignIn}
        className="text-3xl cursor-pointer text-secondary"
      />
    </div>
  );
};

export default SocialMediaLogin;
