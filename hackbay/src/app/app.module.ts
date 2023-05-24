import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TextToSpeechComponent } from './text-to-speech/text-to-speech.component';
import { ChatGptComponent } from './chat-gpt/chat-gpt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartPageComponent } from './start-page/start-page.component';
import { MatCardModule } from '@angular/material/card';
import { FormChildDataComponent } from './form-child-data/form-child-data.component';
import { FormChildInterestsComponent } from './form-child-interests/form-child-interests.component';
import { ResultsPageComponent } from './results-page/results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TextToSpeechComponent,
    ChatGptComponent,
    StartPageComponent,
    FormChildDataComponent,
    FormChildInterestsComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
