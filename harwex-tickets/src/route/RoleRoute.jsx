import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";
import PropTypes from "prop-types";

const RoleRoute = ({ children, roles, redirectPathname, ...rest }) => {
    const user = useSelector(selectUser);

    return (
        <Route {...rest}>
            {({ location }) =>
                roles.indexOf(user.role) !== -1 ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: redirectPathname,
                            state: { from: location },
                        }}
                    />
                )
            }
        </Route>
    );
};

RoleRoute.propTypes = {
    children: PropTypes.element,
    roles: PropTypes.array,
    redirectPathname: PropTypes.string,
};

export default RoleRoute;
