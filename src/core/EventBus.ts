type Events = {
    [key: string]: Array<Function>
};

export default class EventBus {
    listeners: Events = {};

    constructor() {
        this.listeners = {};
    }

    on(event, callback): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }


        this.listeners[event].push(callback);
    }

    off(event, callback): void {
        if (!this.listeners[event]) {
            throw new Error(`Event ${event} not found.`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event, ...args): void {
        if (!this.listeners[event]) {
            throw new Error(`Event ${event} not found.`);
        }

        this.listeners[event].forEach(listener => {
            listener(...args);
        });

    }

}
