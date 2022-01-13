import authReducer from "./authReducer";
import { combineReducers } from "redux";
import workspaceReducer from "./workspaceReducer";
// firestoreReducer is a reducer that is used to handle the firestore state
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  users: workspaceReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
