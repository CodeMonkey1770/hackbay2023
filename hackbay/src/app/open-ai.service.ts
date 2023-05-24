import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { Observable, Subject, filter, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  readonly configuration = new Configuration({
    apiKey: 'XXXXX'
  });

  readonly openai = new OpenAIApi(this.configuration);

  constructor() { }

  getDataFromOpenAI(text: string) : Observable<string> {
    let result = new Subject<string>;

    from(this.openai.createChatCompletion({
      //model: "gpt-3.5-turbo",
      model: "gpt-3.5-turbo-0301",
      messages:[
        {"role": "system", "content": "Du bist Kinderbuchautor."},
        {"role": "user", "content": text}
    ]
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].message.content),
      map(data => data.choices[0].message.content)
    ).subscribe(data => {
      result.next(data);
    }
    );

    return result;
  }
}
