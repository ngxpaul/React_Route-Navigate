import HomePage from "./page/Home";
import ProductPage from "./page/product";
import { createBrowserRouter, RouterProvider , createRoutesFromElements, Route } from "react-router-dom";
// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/product-page", element: <ProductPage /> },
// ]);
const routeDefinitions =createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/product-page" element={<ProductPage />} />
  </Route>
);
const router =createBrowserRouter(routeDefinitions)
function App() {
  return <RouterProvider router={router} />;
}

export default App;
