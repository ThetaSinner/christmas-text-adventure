import React, {useState} from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import TextInput from "./text-input/TextInput";
import Inventory from "./inventory/Inventory";
import AdventureDisplay from "./adventure-display/AdventureDisplay";
import Engine from "./Engine";

const engine = new Engine()

function App() {
  const [entries, setEntries] = useState(engine.entries)
  const [inventory, setInventory] = useState(engine.inventory)

  return (
    <Container>
      <AdventureDisplay entries={entries} />
      <TextInput handleCommand={(c) => { engine.handleCommand(c); setEntries(engine.entries); setInventory(engine.inventory) } } />
      <Inventory items={inventory} />

      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </Container>
  );
}

export default App;
