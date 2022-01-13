import React from "react";
import { connect } from "react-redux";

const WorkspaceSummary = ({ user }) => {
  const { auth, profile, username } = user;
  return (
    <div className="card z-depth-0 project-summary" style={{ marginTop: 300 }}>
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">Welcome {username}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(WorkspaceSummary);
