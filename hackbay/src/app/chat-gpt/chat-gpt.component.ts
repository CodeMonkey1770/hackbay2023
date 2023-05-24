import { Component } from '@angular/core';
import { OpenAiService } from '../open-ai.service';
import { inputDto } from '../models/inputDto';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss']
})
export class ChatGptComponent {

  text : string = '';
  loading : boolean = true;
  input : inputDto = new inputDto();
  constructor(private service: OpenAiService){

    let request = this.input.createRequest();

    service.getDataFromOpenAI(request).subscribe(next => {
      this.text = next;
      this.loading = false;
    });
  }
}
