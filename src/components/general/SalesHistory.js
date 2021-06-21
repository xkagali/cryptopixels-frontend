import React from 'react';
import {Col, Row, Table} from "react-bootstrap";

function SalesHistory() {
    return (
        <Row className="justify-content-center">
            <Col className="col-12 mb-5">
                <h3>Sales History</h3>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Last Sold Date</th>
                        <th>Last Sold Price</th>
                        <th>Buyer</th>
                        <th>Seller</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Last Sold Date">23 Apr 2021</td>
                        <td data-label="Last Sold Price">24CP</td>
                        <td data-label="Buyer">Kai Lin</td>
                        <td data-label="Seller">Guo Hao</td>
                    </tr>
                    <tr>
                        <td data-label="Last Sold Date">10 Jan 2021</td>
                        <td data-label="Last Sold Price">10CP</td>
                        <td data-label="Buyer">Ronald</td>
                        <td data-label="Seller">Kai Lin</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default SalesHistory;