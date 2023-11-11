import React from "react";
import {useAuth} from "../../utils/AuthContext";

const RenderUserData = () => {
    const { logout, authenticated, user, keys } = useAuth();
    console.log('access_token : ', keys.keys.access_token);

    return (
        <>
        <p>RenderUserData</p>
            <p>Dashboard: Retrieve the necessary data for the dashboard at https://freddy.codesubmit.io/dashboard. This endpoint requires a Authorization: Bearer access_token header. Use the access token that you retrieved from Login. Keep in mind that access tokens expire after 15 minutes. You may request a fresh access token by sending a POST request to https://freddy.codesubmit.io/refresh with the Authorization: Bearer refresh_token header. Implement the chart with a charting library of your choice and add a toggle that switches between a weekly and yearly view.</p>
        </>
    )
};

export default RenderUserData;
