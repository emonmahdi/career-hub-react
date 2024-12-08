import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
  return (
    <>
      <Banner />
      <JobCategoryList />
      <FeaturedJobs />
    </>
  );
};

export default Home;
