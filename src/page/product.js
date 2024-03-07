import {Link} from 'react-router-dom';
function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <p>
        Click this link<Link to='/'> to approach HomePage</Link>
      </p>
    </div>
  );
}
export default ProductPage;
