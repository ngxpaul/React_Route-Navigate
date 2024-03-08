import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("products");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Click this link<Link to="products"> to approach product Page</Link>
      </p>
      <button onClick={navigateHandler}>Product Page</button>
    </div>
  );
}
export default HomePage;
