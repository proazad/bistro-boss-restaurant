// eslint-disable-next-line react/prop-types
const PageCover = ({ img, title, slugan }) => {
  // eslint-disable-next-line react/prop-types
  return (
    <div
      className="parallax2 select-none flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="w-1/2 py-16 px-20 parallax-inner uppercase">
        <h4 className="text-white text-7xl font-bold mb-4">{title}</h4>
        <p className="text-2xl uppercase text-white mb-5">{slugan}</p>
      </div>
    </div>
  );
};

export default PageCover;
