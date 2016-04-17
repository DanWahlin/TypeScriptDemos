import { Speaker } from './speaker';

export class Conference {
    
    constructor(public name: string,
                public speakers: Speaker[] = [],
                public sessions: string[] = []) {

    }
    
    addSpeaker(speaker: Speaker) {
        this.speakers.push(speaker);
    }
    
    addSession(sessionName: string) {
        this.sessions.push(sessionName);
    }
    
}       