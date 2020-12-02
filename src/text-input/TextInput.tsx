import {Form, FormGroup} from "react-bootstrap";
import {useState} from "react";

type TextInputProps = {
    handleCommand: (e: string) => void
}

export default function TextInput({ handleCommand }: TextInputProps) {
    const [command, setCommand] = useState('')

    return (
        <Form onSubmit={(e) => { e.preventDefault(); handleCommand(command); setCommand('') }}>
            <FormGroup>
                <Form.Label>What's next?</Form.Label>
                <Form.Control type="text" placeholder="Command" value={command} onChange={(e) => setCommand(e.target.value)} />
            </FormGroup>
        </Form>
    )
}
