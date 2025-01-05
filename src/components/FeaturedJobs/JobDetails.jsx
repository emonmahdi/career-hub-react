import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { saveJobApplication } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const jobId = parseInt(id);
  const job = jobs.find((job) => job.id === jobId);

  const handleApply = () => {
    saveJobApplication(jobId);
    toast("You have applies successfully");
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Job Details {id}</title>
        </Helmet>
      </div>
      <div className="container mx-auto px-4 my-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column (8 parts) */}
          <div className="md:col-span-8 bg-blue-100 p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">{job?.job_title}</h2>
            <div className="my-5">
              <h3 className="font-bold">Job Description: </h3>
              <p>{job?.job_description}</p>
            </div>
            <div className="my-5">
              <h3 className="font-bold">Job Responsibility: </h3>
              <p>{job?.job_responsibility}</p>
            </div>
            <div className="my-5">
              <h3 className="font-bold">Educational Requirements: </h3>
              <p>{job?.educational_requirements}</p>
            </div>
            <div className="my-5">
              <h3 className="font-bold">Experiences: </h3>
              <p>{job?.experiences}</p>
            </div>
          </div>

          {/* Right Column (4 parts) */}
          <div className="md:col-span-4 bg-green-100 p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Job Details</h2>
            <div>
              <h3>Salary: {job?.salary}</h3>
            </div>
            <div className="my-5">
              <h3 className="font-bold">Contact Information: </h3>
              <p className="mb-3">
                <span className="font-bold">Phone: </span>
                {job?.contact_information?.phone}{" "}
              </p>
              <p className="mb-3">
                <span className="font-bold">Email: </span>
                {job?.contact_information?.email}
              </p>
              <p className="mb-3">
                <span className="font-bold">Address: </span>
                {job?.contact_information?.address}
              </p>
            </div>
            <button onClick={handleApply} className="btn btn-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
