import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div>
      <ul className="links-list">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}
