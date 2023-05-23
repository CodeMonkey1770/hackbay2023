import { Component } from '@angular/core';
import { NgWebApisSpeechService } from '../ng-web-apis-speech.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss']
})
export class TextToSpeechComponent {
  constructor( private service:NgWebApisSpeechService) {
    service.speakText('This is a message from your winning team!')
  }

}
