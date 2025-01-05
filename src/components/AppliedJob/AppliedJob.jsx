import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import "./AppliedJob.css";
import { Helmet } from "react-helmet-async";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilterJobs = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJob); // Reset to all jobs
    } else if (filter === "remote") {
      const remoteJobs = appliedJob.filter(
        (job) => job?.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJob.filter(
        (job) => job?.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs?.length > 0) {
      let jobApplied = [];
      for (const id of storedJobsId) {
        const matchedJob = jobs.find((job) => job?.id == id); // Use a different variable name
        if (matchedJob) {
          jobApplied.push(matchedJob);
        }
      }
      setAppliedJob(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, [jobs]);

  return (
    <div>
      <div>
        <Helmet>
          <title>Applied Job</title>
        </Helmet>
      </div>
      <h2>Applied Job : {displayJobs?.length}</h2>
      <div className="text-right">
        <details className="dropdown">
          <summary className="btn m-1">Filter</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {/* <li onClick={() => handleFilterJobs("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilterJobs("onsite")}>
              <a>Onsite</a>
            </li>
            <li onClick={() => handleFilterJobs("remote")}>
              <a>Remote</a>
            </li> */}
            <li onClick={() => handleFilterJobs("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilterJobs("onsite")}>
              <a>Onsite</a>
            </li>
            <li onClick={() => handleFilterJobs("remote")}>
              <a>Remote</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs &&
          displayJobs.map((job) => (
            <div key={job?.id} className="job-card">
              <div className="job-details">
                <div className="flex items-center gap-3">
                  <div>
                    <img src={job.logo} className="w-[100px]" alt="" />
                  </div>
                  <div>
                    <h3 className="job-title">{job?.job_title}</h3>
                    <p>
                      <strong>Salary:</strong> {job?.salary}
                    </p>
                    <p>
                      <strong>Location:</strong> {job?.location}
                    </p>
                    <p>
                      <strong>Type:</strong> {job?.job_type}
                    </p>
                    <p>
                      <strong>Work Mode:</strong> {job?.remote_or_onsite}
                    </p>
                  </div>
                </div>
                <div>
                  <Link to={`/job/${job.id}`} className="view-details-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AppliedJob;
