/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  const { category_name, availability, logo } = category;
  return (
    <div>
      <img src={logo} alt="" className="w-16 h-16 object-contain mb-4" />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {category_name}
      </h2>
      <p>{availability}</p>
    </div>
  );
};

export default CategoryCard;
