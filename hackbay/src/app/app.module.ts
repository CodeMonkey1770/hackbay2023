import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';
import { TextToSpeechComponent } from './text-to-speech/text-to-speech.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatGptComponent,
    TextToSpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
