import React from "react";
import { Routes, Route } from "react-router";
import { SignUp } from "./templates";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/signup" component={SignUp} />
    </Routes>
  );
};

export default Router;
