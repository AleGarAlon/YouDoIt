import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="nav">
      <Link to="/">
        <button className="navLink">Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser} className="navLink">
            Logout
          </button>

          <Link to="/profile">
            <button className="navLink">Profile</button>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>

          <span className="navName">{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button className="navLink">Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button className="navLink">Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
