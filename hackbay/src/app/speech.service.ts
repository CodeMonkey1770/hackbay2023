import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor() { 
  }

  speakText(text: string) {
    //https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
}
