import React, {useContext} from "react";
import DashboardTemplate from "../../templates/DashboardTemplate";
import {Card, Col, Row, Container } from 'react-bootstrap';
import RenderUserData from '../../components/RenderUserData';
import {useNavigate} from "react-router-dom";

import './styles.scss';

function Dashboard() {

    return (
        <DashboardTemplate>
            <h1>Dashboard</h1>
            <div className={'section-stats'}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Today</Card.Title>
                        <Card.Text>
                            $1456 / 9 orders
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Last Week</Card.Title>
                        <Card.Text>
                            $34k / 120 orders
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Last Month</Card.Title>
                        <Card.Text>
                            $95k / 876 orders
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className={'section-header'}>
                <h2>Revenue (last 7 days)</h2>
                {/*switch : should be encapsulated to an independent component*/}
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>

            <a href="https://blog.logrocket.com/top-8-react-chart-libraries/#react-chartjs-2" target={'_blank'}>Chart</a>
            <br/>
            <RenderUserData/>

        </DashboardTemplate>
    );
}

export default Dashboard;
