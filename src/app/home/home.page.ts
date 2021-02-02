import { Component } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor() {}
  showHelp(){
    // introJs(document.querySelector('app-home'))
    // // .setOptions({
    // //   nextLabel: 'Next',
    // //   prevLabel: 'Prev.',
    // //   skipLabel: 'Skip',
    // //   doneLabel: 'Finish'
    // // })
    // .start();

    introJs().setOptions({
      tooltipClass: 'eetz-tooltip',
      steps: [{
        title: this.html('intro'),
        intro: this.html('Hello world!')
      }, {
        title: this.html('Stp 2') ,
        element: document.querySelector('#container'),
        intro: this.html('Click here to login!')
      }]
    }).start();
  }

  private html(text: string) {
    return `<span style="color:black">${text}<span>`;
  }
}
