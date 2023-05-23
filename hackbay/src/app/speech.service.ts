import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor() { 
  }

  speakText(text: string) {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
}
