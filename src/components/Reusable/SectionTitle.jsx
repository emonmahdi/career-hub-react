/* eslint-disable react/prop-types */
const SectionTitle = ({ title, desc }) => {
  return (
    <div className="w-[70%] mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionTitle;
