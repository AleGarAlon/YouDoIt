import "./ProfilePage.css";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div className="profilePage">
      <h1>Profile page</h1>
      <div className="profileLinks">
        <Link to="/settings" className="profileLink">
          Settings
        </Link>
        <Link to="/myTables" className="profileLink">
          My tables
        </Link>
        <Link to="/newTable" className="profileLink">
          New table
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;
