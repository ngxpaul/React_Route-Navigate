import HomePage from "./page/Home";
import ProductPage from "./page/product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/product-page", element: <ProductPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
