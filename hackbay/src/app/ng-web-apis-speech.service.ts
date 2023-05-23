import { Injectable } from '@angular/core';
import { SpeechSynthesisModule } from '@ng-web-apis/speech';

@Injectable({
  providedIn: 'root'
})
export class NgWebApisSpeechService {

  constructor() { 
  }

  speakText(text: string) {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
}
