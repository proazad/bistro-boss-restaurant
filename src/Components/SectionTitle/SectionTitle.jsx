import PropTypes from "prop-types";
const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="w-full text-center">
      <div className="w-5/12 mx-auto">
        <h3 className="text-yellow-400 text-xl">-----{subheading}-----</h3>
        <h1 className="text-4xl font-semibold border-y-4 py-3 my-3">
          {heading}
        </h1>
      </div>
    </div>
  );
};
SectionTitle.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};
export default SectionTitle;
