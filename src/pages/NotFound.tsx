import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="NotFound container is-fluid">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-three-fifths">
          <h3>Page not found</h3>
          <p>Sorry, this page does not exist!</p>
          <Link to="/">Back to the homepage...</Link>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default NotFound;
