import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Profile = (props) => {
  const { user } = props;
  if (user) {
    return (
      <div className="container section user-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <h2>{user.facebookUrl}</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>No profile is found</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const userDetails = users ? users[id] : null;
  console.log(users);
  console.log(userDetails);
  return {
    user: userDetails,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "users",
    },
  ])
)(Profile);
