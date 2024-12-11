import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watchVideo/:id',
        element: <WatchVideo />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
