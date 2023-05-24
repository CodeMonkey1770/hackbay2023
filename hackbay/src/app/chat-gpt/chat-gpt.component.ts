import { Component } from '@angular/core';
import { OpenAiService } from '../open-ai.service';
import { inputDto } from '../models/inputDto';
import { outputDto } from '../models/outputDto';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss']
})
export class ChatGptComponent {

  text : outputDto | undefined;
  temptext : outputDto | undefined;
  loading : boolean = true;
  input : inputDto = new inputDto();
  constructor(private service: OpenAiService, private speech:SpeechService){

    let request = this.input.createRequest();

    service.getDataFromOpenAI(request).subscribe(next => {
      console.log('returned');
      this.temptext = next;
    });


    setTimeout(() => {
      console.log('sleep');
      this.loading = false;
      this.text = this.temptext;
      console.log('speak!');
      console.log(this.text?.chapter1?.text!);
      speech.speakText(this.text?.chapter1?.text!);
    }, 5000);



  }
}
