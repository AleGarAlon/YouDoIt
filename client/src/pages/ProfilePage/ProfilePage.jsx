import "./ProfilePage.css";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <h1>Profile page</h1>

      <Link to="/table">Table</Link>
    </div>
  );
}

export default ProfilePage;
