import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import PlayPage from "./Pages/PlayPage.jsx";
import { ContextProvider } from "./context/Context.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/search/:query" element={<SearchPage />} />
      <Route path="/play/:id" element={<PlayPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
