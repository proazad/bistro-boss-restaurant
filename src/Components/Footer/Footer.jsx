import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex">
        {" "}
        <aside className="w-full bg-slate-600 text-white py-10">
          <div className="w-1/2 ms-auto text-center">
            <h2 className="text-3xl">CONTACT US</h2>
            <p className="text-lg">123 ABS Street, Uni 21, Bangladesh</p>
            <p className="text-lg">+88 123456789</p>
            <p className="text-lg">Mon - Fri: 08:00 - 22:00</p>
            <p className="text-lg">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </aside>
        <div className="w-full bg-neutral text-white py-10">
          <div className="w-1/2 me-auto text-center">
            <h2 className="text-3xl ">Follow us</h2>
            <p>Join us on social media</p>
            <p className="flex justify-center gap-4 my-3">
              <FaFacebookSquare className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaTwitter className="text-2xl" />
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-2">
        <p className="text-white">Copyright &copy; CulinaryCloud. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
