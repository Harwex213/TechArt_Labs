import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "antd";

import { selectFetchProfileStatus, selectProfileData } from "../../../redux/profileSlice";
import { selectUserName } from "../../../redux/userSlice";
import { fetchUserProfile } from "../../../redux/actions/profile";

const ProfileDrawer = () => {
    const dispatch = useDispatch();

    const username = useSelector(selectUserName);
    const profileData = useSelector(selectProfileData);
    const { status, error } = useSelector(selectFetchProfileStatus);

    useEffect(() => {
        if (username !== "guest") {
            dispatch(fetchUserProfile({ username }));
        }
    }, [dispatch, username]);

    return (
        <>
            <h1>Profile</h1>
            {(function () {
                switch (status) {
                    case "pending":
                        return "Loading...";
                    case "rejected":
                        return <Typography.Text type="danger">{error}</Typography.Text>;
                    case "fulfilled":
                        return (
                            <>
                                <p>{profileData.firstname}</p>
                                <p>{profileData.lastname}</p>
                                <p>{profileData.dateOfBirth}</p>
                                <p>{profileData.email}</p>
                            </>
                        );
                    default:
                        break;
                }
            })()}
        </>
    );
};

export default ProfileDrawer;
