import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
  standalone: true
})
export class ResultsPageComponent implements OnInit {
  animationFrames = [
    ["IMG_0759", 0.3],
    ["IMG_0760", 0.1],
    ["IMG_0761", 0.4],
    ["IMG_0763", 0.1],
  ];

  imageSrc: string = "";

  ngOnInit() {
    let index = 0;

    const playAnimation = () => {
      const currentPic = this.animationFrames[index][0];
      const delay = this.animationFrames[index][1];

      this.imageSrc = `/assets/pictures/HackBayGiraffe/${currentPic}.PNG`;

      index = (index + 1) % this.animationFrames.length;

      setTimeout(playAnimation, 1 * 200);
    };

    playAnimation();
  }
}