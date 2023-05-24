import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextToSpeechComponent } from './text-to-speech/text-to-speech.component';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';

@NgModule({
  declarations: [
    AppComponent,
    TextToSpeechComponent,
    ChatGptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
