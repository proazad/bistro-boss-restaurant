import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
const SocialMediaLogin = () => {
  const handleGoogleSignIn = () => {
    Swal("Google Sign in");
  };
  const handleFacebookSignIn = () => {
    Swal(
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
