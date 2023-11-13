import bg from "../../assets/home/featured.jpg";
const FromOurMenu = () => {
  return (
    <div className="px-20 my-20 py-16 parallax" style={{backgroundImage:`url("${bg}")`}}>
      <div className="w-full text-center">
        <div className="w-5/12 mx-auto">
          <h3 className="text-yellow-400 text-xl">-----Check it out-----</h3>
          <h1 className="text-4xl text-white font-semibold border-y-4 py-3 my-3">
          FROM OUR MENU
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-16 px-20 py-10">
        <img src={bg} alt="" className="flex-1" />
        <div className="flex-1">
          <p className="text-white text-xl">March 20, 2023</p>
          <h4 className="text-white text-2xl">WHERE CAN I GET SOME?</h4>
          <p className="text-lg text-white mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn border-white hover:bg-white hover:text-neutral hover:border-white text-white btn-outline border-0 border-b-4">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
