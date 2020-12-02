import React from "react";
import {Col, Row} from "react-bootstrap";
import './Inventory.css'
import Image from 'react-bootstrap/Image'
import {InventoryItemType} from "./InventoryItemType";
import getInventoryIcon from "./InventoryItemIcons";

export default function Inventory({ items }: { items: InventoryItemType[] }) {
    return (
        <>
            <h2>Inventory</h2>
            <Row>
                {items.map((item, index) => <InventoryItem index={index + 1} item={item}/>)}
            </Row>
        </>
    )
}

function InventoryItem({index, item}: { index: number, item: InventoryItemType }) {
    return (
        <Col xs={2}>
            <p className="ItemIndex">{index}</p>
            <div className="ItemContent">
                <Image src={getInventoryIcon(item)} rounded fluid/>
            </div>
        </Col>
    )
}
