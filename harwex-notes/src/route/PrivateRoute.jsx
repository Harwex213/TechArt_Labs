import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectIsGuest } from "../slices/userSlice";

const PrivateRoute = ({ children, ...rest }) => {
    const isUserGuest = useSelector(selectIsGuest);

    return (
        <Route {...rest}>
            {({ location }) =>
                isUserGuest ? (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                ) : (
                    children
                )
            }
        </Route>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.element,
};

export default PrivateRoute;
