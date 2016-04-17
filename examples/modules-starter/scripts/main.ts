import { Conference } from './conference';
import { Speaker } from './speaker';

const conference = new Conference('AngleBrackets');
conference.addSession('TypeScript with John');

var s1 = new Speaker('Dan the man', 'Wahlin');
var s2 = new Speaker('John', 'Papa');

conference.addSpeaker(s1);
conference.addSpeaker(s2);

document.getElementById('whatever').innerHTML = s1.firstName;

console.log(conference.speakers);