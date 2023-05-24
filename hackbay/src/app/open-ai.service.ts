import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { Observable, Subject, filter, from, map, of } from 'rxjs';
import { outputDto } from './models/outputDto';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  readonly configuration = new Configuration({
    apiKey: 'XXXXX'
  });

  readonly openai = new OpenAIApi(this.configuration);

  constructor() { }

  getDataFromOpenAI(text: string) : Observable<outputDto> {
    let result = new Subject<string>;

    /*
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
    */

    let x : Observable<outputDto> = of({
      title: 'Gigi, the Super Farting Giraffe and the Secret of the Magic Drum',
      chapter1: {
        title: 'Gigi\'s Superpowers and the Plan',
        text: `Once upon a time, there was a giraffe named Gigi. She wasn't an ordinary giraffe She could create farts of such strengh that could even catapult her up into the clouds! But lately, Gigi had been feeling some discomfort in her chest, right where her large heart was. 
              One sunny day, Gigi decided she wanted to join the Jungle Superhero League. But due to her chest pains, she wasn't as strong and brave as she wanted to be. Teddy, her soft and cuddly teddy bear friend, and Sponge-Bob, a cheerful sponge monkey knew something was not right. They suggested she visit the jungle doctor to find out what was happening. 
              "But I'm scared of getting a shot," confessed Gigi. Sponge-Bob and Teddy came up with a plan. "Let's play a game," they said, and gently pricked Gigi with a soft jungle flower, pretending it was a shot. It didn't hurt at all. After the 'shot', Gigi received a magic shield, a powerful boost to protect her from future 'shots'. 
              To strengthen Gigi for the upcoming examination, they played "1, 2, 3 freeze!" together to practice staying still. (Attention! Transition to the game: "1, 2, 3 freeze!") They took deep breaths and then blew out daisies, windmills, and candles, teaching Gigi to hold her breath. (Attention! Transition to the game: "Hold your Breath") 
              Finally, they made funny noises to prepare Gigi for what was to come in the Magic Tunnel. Sponge-Bob made squeaky noises, while Teddy hummed and buzzed. Gigi laughed and felt a bit less anxious.`
      },
      chapter2: {
        title: 'Chapter 2: The Journey to the Magic Drum ',
        text: `Gigi and her friends decided to travel to the Magic Drum to find out what was causing the ache in Gigi\'s chest. During their trip, they played the game "I'm packing my suitcase" to prepare for their arrival. They took all sorts of things: Gigi's magic shield, Sponge-Bob's soap bubbles, and Teddy's favorite honey. 
              (Attention! Transition to the game: "I pack my suitcase")`
      },
      chapter3: {
        title: 'Waiting for the Adventure',
        text: `There was a bit of a wait at the hospital. But they didn\'t mind, they continued their game and reminded Gigi of how brave and strong she was.`
      },
      chapter4: {
        title: 'The Secret of the Magic Drum',
        text: `Finally, the moment arrived. Gigi lay in the Magic Drum, ready for her adventure. She heard the strange noises she had practiced with her friends, and thought of the magic shield that protected her from the little poke. And she knew that Sponge-Bob and Teddy were waiting outside, cheering her on. 
              "Hello, little adventurer," Gigi whispered softly, "I know it's a bit scary, but you're so brave. Remember to stay still, like in the '1, 2, 3 switch!' game, and listen to the music playing in the background. You are strong, you are brave, and I'm here with you." 
              After the examination, Gigi felt relieved and stronger. She had found out how she could overcome her symptoms. With a joyful fart of relief, she was finally admitted into the Superhero League. 
              And so ends the story of Gigi, the super farting giraffe, who was able to overcome her problems thanks to her friends, her bravery, and the secret of the Magic Drum. She showed us that with a little support and a good dose of bravery, it's possible to conquer even the toughest challenges.`
      },
    });
    
    return x;
  }

}
