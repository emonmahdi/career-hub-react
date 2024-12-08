/* eslint-disable react/prop-types */
const JobsCard = ({ job }) => {
  const { job_title, company_name, logo, location, salary } = job;
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300">
      <img
        src={logo}
        alt={`${company_name} logo`}
        className="w-16 h-16 object-contain mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{job_title}</h2>
      <h5 className="text-md text-gray-600 mb-4">{company_name}</h5>

      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
          Remote
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200">
          Full Time
        </button>
      </div>

      <div className="flex gap-2 text-gray-700 text-sm">
        <p className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c0-1.104.896-2 2-2h8c1.104 0 2 .896 2 2v8c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2V8z"
            />
          </svg>
          {location}
        </p>
        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8s-8-3.582-8-8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
          </svg>
          {salary}
        </span>
      </div>
    </div>
  );
};

export default JobsCard;
