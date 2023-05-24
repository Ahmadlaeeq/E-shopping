import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Back from "./pages/Back";
import Singleprodutc from "./pages/Singleprodutc";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar/>
        <Back/>
        </div>,
    }, 
    {
      path: "/products",
      element: <div>
        <Navbar/>
        <Home/>
        </div>,
    },
    {
      path:"/singleproduct/:name",
      element:<div>
        <Navbar/>
        <Singleprodutc/>
      </div>
    }
  ]);

  return (

    <RouterProvider router={router} />

  );
}

export default App;
