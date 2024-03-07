import HomePage from "./page/Home";
import RootLayout from "./page/Root";
import ProductPage from "./page/product";
import ErrorPage from "./page/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product-page", element: <ProductPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
