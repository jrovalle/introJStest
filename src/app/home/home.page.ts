import { Component } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  showHelp(){
    introJs(document.querySelector("app-home")).setOptions({
      'nextLabel': 'Next step',
      'prevLabel': 'Previous step',
      'skipLabel': 'Don\'t bother me!',
      'doneLabel': 'Finish'
    }).start(); 
  }
}
