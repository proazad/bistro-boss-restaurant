import { Link } from "react-router-dom";
import error from "../../assets/404.gif";
const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <img src={error} alt="" />
      <Link to="/" className="absolute text-3xl bottom-5 text-blue-700 uppercase font-semibold">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
