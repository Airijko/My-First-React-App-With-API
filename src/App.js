import React from "react";
import Navbar from "./navbar.js";
import Home from "./Home";
import Champions from "./Champions";
import Post from "./Post";
import Summoners from "./Summoners";
import Login from "./Login";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/Champions":
      Component = Champions;
      break;
    case "/Post":
      Component = Post;
      break;
    case "/Summoners":
      Component = Summoners;
      break;
    case "/Login":
      Component = Login;
      break;
    default:
      Component = Home;
      break;
  }

  return (
    <>
      <Navbar currentComponent={Component} />
      <Component />
    </>
  );
}

export default App;
