import { eventEmitter } from "../app";


eventEmitter.on('clientRequest', (guest: string) => {
    return `Welcome guest! ${guest}`;
});

module.exports = eventEmitter;