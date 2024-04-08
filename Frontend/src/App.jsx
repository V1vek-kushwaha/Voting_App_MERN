import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import React from "react";
import Layout from "./Layout/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import LiveElection from "./Components/Elections/LiveElection";
import Results from "./Components/Elections/Results";
import About from "./Components/About";
import Contect from "./Components/Contect";
import { AuthProvider } from "./Auth/AuthContext";
import Profile from "./Components/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/liveelection",
          element: <LiveElection />,
        },
        {
          path: "/liveresults",
          element: <Results />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contect />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
