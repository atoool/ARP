import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
// netninja
import rootReducer from "./redux/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "./firebase/firebase";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase), // redux binding for firebase
    reduxFirestore(firebase, {
      userFirestoreForProfile: true,
      userProfile: "users", // bind firestore to redux using redux-firestore (userProfile)
      attachAuthIsReady: true,
    }) // redux bindings for firestore
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
