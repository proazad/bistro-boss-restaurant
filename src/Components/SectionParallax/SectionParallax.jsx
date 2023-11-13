
const SectionParallax = ({img,title,subtitle}) => {
  return (
    <div
      className="parallax2 select-none flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="w-8/12 py-16 px-20 parallax-inner uppercase">
        <h4 className="text-white text-4xl font-bold mb-4">{title}</h4>
        <p className="text-xl uppercase text-white mb-5">
         {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionParallax;
