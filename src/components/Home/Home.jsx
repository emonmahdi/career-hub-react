import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Career Hub | Home</title>
        </Helmet>
      </div>
      <div>
        <Banner />
        <JobCategoryList />
        <FeaturedJobs />
      </div>
    </>
  );
};

export default Home;
