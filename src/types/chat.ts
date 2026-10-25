export class ChatTurn {
    role?: string;
    text?: string;
    model_output: string | null;
    constructor(opts: { role?: string, text?: string, model_output?: string|null } = {}) {
        const { role, text, model_output = null } = opts;
        this.role = role;
        this.text = text;
        this.model_output = model_output;
    }

    toString() {
        const preview = this.text && this.text.length > 100 ? this.text.slice(0, 100) + '...' : (this.text || '');
        return `${this.role?.toUpperCase()}: ${preview}`;
    }
}

export class ChatHistory {
    cid?: unknown;
    turns?: unknown[];
    constructor(opts: { cid?: unknown, turns?: unknown[] } = {}) {
        const { cid, turns } = opts;
        this.cid = cid;
        this.turns = turns || [];
    }

    toString() {
        return `ChatHistory(cid=${this.cid})`;
    }
}

export class ChatInfo {
    cid?: unknown;
    title?: string;
    is_pinned: boolean;
    timestamp: number;
    constructor(opts: { cid?: unknown, title?: string, is_pinned?: boolean, timestamp?: number } = {}) {
        const { cid, title, is_pinned = false, timestamp } = opts;
        this.cid = cid;
        this.title = title;
        this.is_pinned = is_pinned;
        this.timestamp = timestamp as number;
    }

    toString() {
        const pin = this.is_pinned ? '[Pinned] ' : '';
        const title = this.title || `Chat(${this.cid})`;
        const dt = new Date(this.timestamp * 1000).toISOString().replace('T', ' ').slice(0, 19);
        return `${pin}${title} (${dt})`;
    }
}
