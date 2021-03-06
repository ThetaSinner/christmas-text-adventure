import {Entry} from "./Entry";

export default function EntryText({ entry }: { entry: Entry }) {
    return (
        <>
            <span>{entry.value}</span><br />
            {entry.options?.map((opt, index) => <div key={index}><span>{index + 1}. {opt}</span><br/></div>)}
        </>
    )
}
