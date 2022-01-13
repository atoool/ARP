import React, { useContext } from "react";
import WorkspaceSummary from "../components/WorkspaceSummary/WorkspaceSummary";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Workspace = ({ users }) => {
  
 alert(users)
  return (
    <div className="user-list section">
      {users &&
        users.map((user) => {
          return (
            <Link to={`/workspace/ + ${user.username}`} key={user.id}>
              <WorkspaceSummary user={user} />
            </Link>
          );
        })}
    </div>
  );
};

export default Workspace;
