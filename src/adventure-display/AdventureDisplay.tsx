import './AdventureDisplay.css'
import {Entry, EntryType} from "./Entry";
import EntryPrompt from "./EntryPrompt";
import EntryText from "./EntryText";
import EntryEcho from "./EntryEcho";
import EntryOptions from './EntryOptions';
import {useEffect} from "react";

function createEntry(entry: Entry) {
    switch (entry.kind) {
        case EntryType.Prompt:
            return EntryPrompt({entry: entry})
        case EntryType.Text:
            return EntryText({entry: entry})
        case EntryType.Echo:
            return EntryEcho({entry: entry})
        case EntryType.Options:
            return EntryOptions({entry: entry})
    }
}

export default function AdventureDisplay({entries}: { entries: Entry[] }) {
    const entriesDisplay = entries.map((entry, index) =>
            <div key={index}>
                {createEntry(entry)}
            </div>
    )

    useEffect(() => {
        const displayConsole = document.getElementsByClassName("DisplayConsole")[0];
        displayConsole.scrollTop = displayConsole.scrollHeight;
    })

    return (
        <>
            <h2>Christmas Adventure</h2>
            <div className="DisplayConsole">
                {entriesDisplay}
            </div>
        </>
    )
}
