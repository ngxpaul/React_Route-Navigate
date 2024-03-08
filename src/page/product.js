import { Link } from "react-router-dom";
const PRODUCT = [
  { id: "p1", name: "Product 1" },
  { id: "p2", name: "Product 2" },
  { id: "p3", name: "Product 3" },
];

function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      {PRODUCT.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </div>
  );
}
export default ProductPage;
