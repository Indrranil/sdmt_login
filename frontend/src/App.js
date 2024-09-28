import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import "./index.css"; // Check the path to make sure it’s correct

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <Login onLoginSuccess={handleLoginSuccess} />
        </>
      ) : (
        <h2>Welcome! You are logged in.</h2>
      )}
    </div>
  );
};

export default App;
