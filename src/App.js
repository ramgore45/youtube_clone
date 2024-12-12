import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Body />,
//     children: [
//       {
//         path: '/',
//         element: <MainContainer />
//       },
//       {
//         path: '/watchVideo/:id',
//         element: <WatchVideo />
//       }
//     ]
//   }
// ]);

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Header />
        {/* <RouterProvider router={appRouter} /> */}
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />}/>
            <Route path="/watchVideo/:id" element={<WatchVideo />}/>
          </Route>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
