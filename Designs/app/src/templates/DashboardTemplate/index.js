import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

import pumpkin from '../../img/Freddys_Logo.svg';
import './styles.scss';

const DashboardTemplate = ({ children }) => {
    const { logout, authenticated, user, keys } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    useEffect(() => {
        if (!authenticated) {
            navigate('/');
        }
    }, [authenticated, navigate]);


    if(authenticated) return (

        <div className={'dashboard-template'}>
            <div className={'left-navigation'}>
                <img src={pumpkin} alt=""/>
                <br/>
                <div>User: <b>{user && user.username}</b></div>
                <ul className={'nav'}>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><div className={'logout-btn'} onClick={handleLogout}>Logout</div></li>
                </ul>
            </div>
            <div className={'main-container'}>
                {children}
            </div>
        </div>
    );
};

export default DashboardTemplate;
