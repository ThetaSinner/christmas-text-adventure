import {Entry} from "./Entry";
import './EntryEcho.css'

export default function EntryEcho({ entry }: { entry: Entry }) {
    return (
        <span className="EntryEcho">{entry.value}</span>
    )
}
