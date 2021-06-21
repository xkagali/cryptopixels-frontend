import React, {useEffect} from 'react';
import {Col, Row, Table} from "react-bootstrap";

function SalesHistory({itemHistory}) {
    console.log(itemHistory)

    return (
        <Row className="justify-content-center">
            <Col className="col-12 mb-5">
                <h3>Sales History</h3>
                <Table hover>
                    <thead>
                    <tr style={{color:'white'}}>
                        <th>Last Sold Date</th>
                        <th>Last Sold Price</th>
                        <th>Buyer</th>
                        <th>Seller</th>
                    </tr>
                    </thead>
                    <tbody>
                    {itemHistory.map(item=>(
                        <tr style={{color:'white'}}>
                            <td data-label="Last Sold Date">{item.dateOfTransaction}</td>
                            <td data-label="Last Sold Price">{item.transactedPrice}CP</td>
                            <td data-label="Buyer">{item.buyer.displayName}</td>
                            <td data-label="Seller">{item.seller.displayName}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default SalesHistory;
