export enum EntryType {
    Prompt,
    Text,
    Echo,
    Options,
}

export type Entry = {
    kind: EntryType,
    value: string
    options?: string[]
}
