import {Link} from 'react-router-dom';

function HomePage(){
    return (
        <div>
            <h1>Home Page</h1>
        <p>
        Click this link<Link to='/product-page'>  to approach product Page</Link>

        </p>
        </div>
    )
}
export default HomePage;