import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import LoginModal from "../Login/SignModal";
import { GlobalContext } from "./GlobalContext";

const PrivateRoute = ({ component: ComponentProps, ...rest }) => {
  const { currentUser } = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        return currentUser ? (
          <ComponentProps {...propsRoute} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
