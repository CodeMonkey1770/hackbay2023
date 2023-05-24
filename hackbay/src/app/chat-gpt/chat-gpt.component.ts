import { Component } from '@angular/core';
import { OpenAiService } from '../open-ai.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss']
})
export class ChatGptComponent {

  text : string = '';
  loading : boolean = true;
  constructor(private service: OpenAiService){

    service.getDataFromOpenAI(`
    Generiere eine Geschichte für einen 9-jähriges Kind, dass lernen muss für eine MRT-Untersuchung stillzuhalten, und die Luft anzuhalten. Das Kind benötigt eine Spritze für das Kontrastmittel und hat Angst davor. Er mag Spiderman und spielt gerne Fußball. Er hat ein bisschen Angst vor der Enge des MRT-Geräts. Die Geschichte soll 3 Kapitel haben in der er auf jedes seiner Probleme einzeln vorbereitet wird. Ersetze das Wort MRT durch Synonyme (wie z.B. Zauberröhre)
    Die Geschichte soll folgenden Aufbau haben:
    1. Titel der Geschichte
    2. Chapter 1 (Zweck: Einführung in die Geschichte)
    3. Chapter 2 (Zweck: Wartezeit überbrücken zum Termin)
    4. Chapter 3 (Zweck: Weg zum Krankenhaus überbrücken)
    `).subscribe(next => {
      this.text = next;
      this.loading = false;
    });
  }
}
