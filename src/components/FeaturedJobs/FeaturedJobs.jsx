import { useState } from "react";
import SectionTitle from "../Reusable/SectionTitle";
import { useEffect } from "react";
import JobsCard from "./JobsCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);

  return (
    <div className="py-5">
      <SectionTitle
        title="Featured Jobs"
        desc="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {jobs.map((job) => (
          <JobsCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
