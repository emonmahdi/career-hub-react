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
