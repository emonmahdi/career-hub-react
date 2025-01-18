import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import ErrorPage from "./ErrorPage";
import JobDetails from "../components/FeaturedJobs/JobDetails";
import AppliedJob from "../components/AppliedJob/AppliedJob";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied-job",
        element: (
          <PrivateRoute>
            <AppliedJob />
          </PrivateRoute>
        ),
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
