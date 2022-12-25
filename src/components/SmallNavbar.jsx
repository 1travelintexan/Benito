import { Link } from "react-router-dom";

function SmallNavbar() {
  return (
    <nav id="small-navbar">
      <Link to="" className="link">
        About
      </Link>
      <Link to="" className="link">
        Contact
      </Link>
      <Link to="" className="link">
        Credentials
      </Link>
      <Link to="" className="link">
        Book
      </Link>
    </nav>
  );
}

export default SmallNavbar;
