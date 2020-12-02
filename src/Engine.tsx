import {Entry, EntryType} from "./adventure-display/Entry";
import {InventoryItemType} from "./inventory/InventoryItemType";


export default class Engine {
    _entries: Entry[] = [{
        kind: EntryType.Prompt,
        value: "Ready to start? (y/n)"
    }]

    _state = 0

    _playerName = ''
    _inventory: InventoryItemType[] = []

    get entries() {
        return this._entries
    }

    get inventory() {
        return this._inventory
    }

    handleCommand(command: string) {
        switch (this._state) {
            case 0:
                if (command === 'y') {
                    this._entries.push({
                        kind: EntryType.Echo,
                        value: command
                    })

                    this._entries = this._entries.concat({
                        kind: EntryType.Prompt,
                        value: 'Okay, let\'s go! What should I call you?'
                    })

                    this._state++
                }
                break
            case 1:
                this._playerName = command

                this._entries.push({
                    kind: EntryType.Echo,
                    value: command
                })

                this._entries.push({
                    kind: EntryType.Text,
                    value: `Nice to meet you ${this._playerName}.`
                })

                this._entries.push({
                    kind: EntryType.Text,
                    value: "Alvin: \"I'm Alvin and I need your help. It's 2020, everything has gone horribly wrong and it's up to us to make sure that the curse is broken before christmas! " +
                        "We'll have to be careful though, there is danger at every turn... We'll be travelling through the fabric of the universe looking for the source of the curse. Right now we're at a step-on point " +
                        "but before we get going, you should grab something that might be useful of the table.\""
                })

                this._entries = this._entries.concat({
                    kind: EntryType.Prompt,
                    value: 'What do you want to pick up? (lollipop/brownie/bread)'
                })

                this._state++
                break
            case 2:
                let match = false
                if (command === 'lollipop') {
                    this._inventory = this._inventory.concat(InventoryItemType.Lollipop)
                    match = true
                }

                if (command === 'brownie') {
                    this._inventory = this._inventory.concat(InventoryItemType.Brownie)
                    match = true
                }

                if (command === 'bread') {
                    this._entries.push({
                        kind: EntryType.Echo,
                        value: command
                    })

                    this._entries = this._entries.concat({
                        kind: EntryType.Text,
                        value: 'You catch covid and die. Thanks for playing!'
                    })

                    this._state = -1
                }

                if (match) {
                    this._entries.push({
                        kind: EntryType.Echo,
                        value: command
                    })

                    this._entries.push({
                        kind: EntryType.Text,
                        value: "Alright, seems like a good choice! Let's use the step-on point, see you in there."
                    })

                    this._entries = this._entries.concat({
                        kind: EntryType.Prompt,
                        value: "Use the step-on point? (y/n)"
                    })

                    this._state++
                }
                break
            case 3:
                if (command === 'y') {
                    this._entries.push({
                        kind: EntryType.Echo,
                        value: command
                    })

                    this._entries.push({
                        kind: EntryType.Text,
                        value: "You step out to overwhelming heat, your eyes start to water immediately as smoke rushes around you."
                    })

                    this._entries.push({
                        kind: EntryType.Text,
                        value: "Alvin: \"We must be near California, a fire this powerful could only have come from consuming homes and forests.\""
                    })

                    this._entries = this._entries.concat({
                        kind: EntryType.Options,
                        value: "What do you do? (1/2)",
                        options: ["Point out the singed koala bear limping past", "You look on at the destruction, somebody else will deal with it"]
                    })

                    this._state++
                }
                break
            case 4:
                if (command === '2') {
                    this._entries.push({
                        kind: EntryType.Echo,
                        value: command
                    })

                    this._entries = this._entries.concat({
                        kind: EntryType.Text,
                        value: 'You catch covid then burn to death, rough break!'
                    })

                    this._state = -1
                }

                if (command === '1') {
                    this._entries.push({
                        kind: EntryType.Echo,
                        value: command
                    })

                    this._entries.push({
                        kind: EntryType.Text,
                        value: "Alvin: \"Ahhh, yes, Australia. That's on fire too... Anywhoo, we must be here for a reason.\""
                    })

                    this._entries = this._entries.concat({
                        kind: EntryType.Text,
                        value: "You look around and see destruction and devastation everywhere. The koala isn't making good progress, he seems to be heading towards the... oh dear that's not good. " +
                            "It's clear you can't stay here, so you start to move (not where the koala went)."
                    })

                    this._state++
                }
                break
        }
    }
}
