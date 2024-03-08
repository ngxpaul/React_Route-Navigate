import { useParams } from "react-router-dom";
function ProductDetailPage() {
    const params = useParams();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {params.productID}</p>
    </div>
  );
}
export default ProductDetailPage;