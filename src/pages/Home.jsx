import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeCards from "../components/HomeCards/HomeCards";
import NewsletterBox from "../components/NewsletterBox/NewsletterBox";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <p>
          You are logged in- <Link to="/workspace">View Workspace</Link>
        </p>
      ) : (
        <>
          <HomeCards />
          <NewsletterBox />
        </>
      )}
    </>
  );
};

export default Home;
