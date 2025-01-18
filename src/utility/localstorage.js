const getStoredJobApplication = () => {
  const storedApplication = localStorage.getItem("job-application");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedApplication = getStoredJobApplication();
  const exists = storedApplication.find((jobId) => jobId === id);
  if (!exists) {
    storedApplication.push(id);
    localStorage.setItem("job-application", JSON.stringify(storedApplication));
  }
};

export { getStoredJobApplication, saveJobApplication };
// Function to get stored jobs from localStorage for the logged-in Firebase user
// const getStoredJobApplication = (userId) => {
//   if (!userId) {
//     console.error("User ID is required to fetch stored job applications.");
//     return [];
//   }
//   const storedApplication = localStorage.getItem(`${userId}-job-application`);
//   return storedApplication ? JSON.parse(storedApplication) : [];
// };

// // Function to save applied jobs to localStorage for the logged-in Firebase user
// const saveJobApplication = (userId, jobId) => {
//   if (!userId || !jobId) {
//     console.error(
//       "Both User ID and Job ID are required to save a job application."
//     );
//     return [];
//   }

//   const storedApplications = getStoredJobApplication(userId);
//   if (!storedApplications.includes(jobId)) {
//     const updatedApplications = [...storedApplications, jobId];
//     localStorage.setItem(
//       `${userId}-job-application`,
//       JSON.stringify(updatedApplications)
//     );
//     alert("Job application saved successfully!");
//     return updatedApplications;
//   } else {
//     alert("You have already applied for this job.");
//     return storedApplications;
//   }
// };

// export { getStoredJobApplication, saveJobApplication };
