import "./App.css";
import NetflixBg from "./Images/NetflixBG.png";
import Body from "./components/layout/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/specific/Login";
import Browse from "./components/layout/Browse";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    // <div className="App bg-bgcolor bg-custom-gradient w-[100%] h-[100%] min-h-[32rem]">
    <div className="App ">
      <RouterProvider router={appRouter}>
        <div className="bg-bg-color bg-custom-gradient">
          <Login />
          <Body />
        </div>
      </RouterProvider>

      {/* <div  cla>

      </div>
      <img
        alt="Image"
        src={netflixBg}
        className="w-[1028px] h-[640px] left-0 right-0"
      /> */}
    </div>
  );
};

export default App;
