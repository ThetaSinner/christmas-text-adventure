import React from "react";
import {Col, Row} from "react-bootstrap";
import './Inventory.css'
import Image from 'react-bootstrap/Image'
import {InventoryItemType} from "./InventoryItemType";
import getInventoryIcon from "./InventoryItemIcons";

export default function Inventory({ items }: { items: InventoryItemType[] }) {
    const renderItems = Array(6).fill(InventoryItemType.Empty).map((v, index) => {
        return index < items.length ? items[index] : v
    })

    return (
        <>
            <h2>Inventory</h2>
            <Row>
                {renderItems.map((item, index) => <InventoryItem key={index} index={index + 1} item={item}/>)}
            </Row>
        </>
    )
}

function InventoryItem({index, item}: { index: number, item: InventoryItemType }) {
    return (
        <Col xs={2}>
            <p className="ItemIndex">{index}</p>
            <div className="ItemContent">
                {item === InventoryItemType.Empty ? <></> : <Image src={getInventoryIcon(item)} rounded fluid/>}
            </div>
        </Col>
    )
}
