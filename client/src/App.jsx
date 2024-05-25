import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import TablePage from "./pages/TablePage/TablePage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { NewTablePage } from "./pages/NewTablePage/NewTablePage";
import { MyTablesPage } from "./pages/MyTablesPage/MyTablesPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/table"
          element={
            <IsPrivate>
              <TablePage />
            </IsPrivate>
          }
        />
        <Route
          path="/MyTables"
          element={
            <IsPrivate>
              <MyTablesPage />
            </IsPrivate>
          }
        />
        <Route
          path="/newTable"
          element={
            <IsPrivate>
              <NewTablePage />
            </IsPrivate>
          }
        />
        <Route
          path="/settings"
          element={
            <IsPrivate>
              <SettingsPage />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
