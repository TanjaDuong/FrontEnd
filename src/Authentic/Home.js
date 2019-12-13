import React from "react";
import firebaseConfig from "../firebase";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    
      <p>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            Log in
          </Button>
        </Link>
      </p>

      <Link to="/signup" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Link>
    </>
  );
};
export default Home;
