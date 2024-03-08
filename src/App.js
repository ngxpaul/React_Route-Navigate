import HomePage from "./page/Home";
import RootLayout from "./page/Root";
import ProductPage from "./page/product";
import ErrorPage from "./page/ErrorPage";
import ProductDetailPage from "./page/ProductDetailPage.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/products/:productID", element: <ProductDetailPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
