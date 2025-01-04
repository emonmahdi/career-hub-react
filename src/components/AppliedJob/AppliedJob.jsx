import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJob = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobsId.includes(job?.id));

      // console.log(jobs, storedJobsId, jobsApplied);

      let jobApplied = [];
      for (const id of storedJobsId) {
        const job = job.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJob(jobApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2>Applied Job : {appliedJob.length}</h2>
    </div>
  );
};

export default AppliedJob;
