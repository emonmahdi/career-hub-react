import { useEffect, useState } from "react";
import SectionTitle from "../Reusable/SectionTitle";
import CategoryCard from "./CategoryCard";

const JobCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <div className="py-5">
      <SectionTitle
        title="Job Category List"
        desc="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
