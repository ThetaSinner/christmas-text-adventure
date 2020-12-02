import {Entry} from "./Entry";

export default function EntryText({ entry }: { entry: Entry }) {
    return (
        <span>{entry.value}</span>
    )
}
