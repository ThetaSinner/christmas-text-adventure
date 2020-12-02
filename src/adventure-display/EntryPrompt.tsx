import {Entry} from "./Entry";

export default function EntryPrompt({ entry }: { entry: Entry }) {
    return (
        <span>&gt;&gt; {entry.value}</span>
    )
}
