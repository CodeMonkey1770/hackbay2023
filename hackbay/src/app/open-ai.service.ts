import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { Observable, Subject, filter, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  readonly configuration = new Configuration({
    apiKey: 'XXXXXX'
  });

  readonly openai = new OpenAIApi(this.configuration);

  constructor() { }

  getDataFromOpenAI(text: string) : Observable<string> {
    console.log(text);
    let result = new Subject<string>;
    from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 5000
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)
    ).subscribe(data => {
      console.log(data);
      result.next(data);
    }
    );

    return result;
  }
}
