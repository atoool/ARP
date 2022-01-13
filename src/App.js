import React, { useState } from "react";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Membership from "./pages/Membership";
import Workspace from "./pages/Workspace";
import PrivateRoute from "./PrivateRoute";

import { Elements, StripeProvider } from "react-stripe-elements";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

import { Footer } from "./components/Footer/Footer";

// Stripe Payment
import { loadStripe } from "@stripe/stripe-js";

import { makeStyles } from "@material-ui/core/styles";
import Profile from "./pages/Profile";
import { Create, Height } from "@material-ui/icons";

import { auth, createUserProfileDocument } from "./firebase/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    minHeight: "100vh",
  },
  footerContainer: {
    backgroundColor: "blue",
    bottom: 0,
    position: "static",
    height: "2.5rem",
  },
}));

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <AuthProvider>
          <div>
            <Navbar currentUser={this.state.currentUser} />
            <Switch>
              {/* PrivateRoute only allows logged in users to access the the folowing components */}
              <PrivateRoute exact path="/workspace" component={Workspace} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route exact from="/" render={(props) => <Home {...props} />} />
              <Route
                exact
                from="/workspace"
                render={(props) => <Workspace {...props} />}
              />
              <Route
                exact
                path="/membership"
                render={(props) => <Membership {...props} />}
              />
              <Route
                exact
                path="/profile/:userId"
                render={(props) => <Profile {...props} />}
              />

              <Route
                exact
                path="/login"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/signup"
                render={(props) => <Signup {...props} />}
              />
              <Route
                exact
                path="/forgot-password"
                render={(props) => <ForgotPassword {...props} />}
              />
            </Switch>
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
