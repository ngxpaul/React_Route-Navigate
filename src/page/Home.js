import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/product-page");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Click this link<Link to="/product-page"> to approach product Page</Link>
      </p>
      <button onClick={navigateHandler}>Product Page</button>
    </div>
  );
}
export default HomePage;
