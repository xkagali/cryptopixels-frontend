
import React from 'react';
import {Col, Row, Table} from "react-bootstrap";
import SalesTransaction from "./SalesTransaction";

function SalesHistory({itemHistory, userProfile, userTransactions}) {

    return (
        <>
            {
                userProfile &&
                <Table hover>
                    <thead>
                    <tr style={{color: 'white'}}>
                        <th>Name</th>
                        <th>Pixel ID</th>
                        <th>Sold Date</th>
                        <th>Sold Price</th>
                        <th>Buyer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userTransactions.map(item => (
                        <SalesTransaction item={item} />
                    ))}
                    </tbody>
                </Table>
            }
            {
                itemHistory &&
                <Row className="justify-content-center">
                    <Col className="col-12 mb-5">
                        <h3>Sales History</h3>
                        <Table hover>
                            <thead>
                            <tr style={{color: 'white'}}>
                                <th>Last Sold Date</th>
                                <th>Last Sold Price</th>
                                <th>Buyer</th>
                                <th>Seller</th>
                            </tr>
                            </thead>
                            <tbody>
                            {itemHistory.map(item => (
                                <SalesTransaction item={item} itemHistory={true} />
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            }
        </>
    );
}

export default SalesHistory;
