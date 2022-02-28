export declare enum EventTypes {
    START = "start",
    STOP = "stop",
    CONTINUE = "continue",
    END = "end"
}
export declare class Event {
    status: EventTypes;
    time: string;
}
export declare class Timer {
    constructor(partial: Partial<Timer>);
    _id: string;
    get date(): string;
    events: Event[];
    hours: string;
    overime: string;
    break: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
