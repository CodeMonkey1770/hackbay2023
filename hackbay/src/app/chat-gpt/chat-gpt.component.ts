import { Component } from '@angular/core';
import { OpenAiService } from '../open-ai.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss']
})
export class ChatGptComponent {
  constructor(private service: OpenAiService){

    service.getDataFromOpenAI('Werden wir morgen gewinnen?');
  }
}
