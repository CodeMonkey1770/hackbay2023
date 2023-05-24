import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
  standalone: true
})
export class ResultsPageComponent implements OnInit {
  animationFrames: [string, number][] = [
    ["IMG_0759", 0.3], //eye = open / mouth = closed
    ["IMG_0760", 0.1], //eye = closed / mouth = closed
    ["IMG_0761", 0.2], //eye = closed / mouth = open
    ["IMG_0763", 1.2], //eye = open / mouth = open
  ];

  imageSrc: string = "";

  ngOnInit() {
    let index = 0;

    const playAnimation = () => {
      const currentPic = this.animationFrames[index][0];
      const delay = this.animationFrames[index][1];

      this.imageSrc = `/assets/pictures/HackBayGiraffe/${currentPic}.PNG`;

      index = (index + 1) % this.animationFrames.length;

      setTimeout(playAnimation,  2000 * delay);
    };

    playAnimation();
  }
}