import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['body { background: red; }'],
})
@Component({
  selector: "body", 
  styles: ['body { background: red; }'],

  host: {
    "[style.background-image]":"bodyBackgroundImage()" 
  },
})
export class AppComponent {
  title = 'Welcome to your new beginning!';
  fullImagePath: string;
  fullImagePath1: string;
  gmailiconpath: string;
  linkediconpath: string;
  githubiconpath: string;
  twittericonpath: string;

  constructor() {
    this.fullImagePath = 'assets/image1.jpg';
    this.fullImagePath1 = 'assets/image2.jpg';
    this.gmailiconpath = 'assets/gmailicon.png';
    this.linkediconpath = 'assets/linkedinicon.png';
    this.githubiconpath = 'assets/github.png';
    this.twittericonpath = 'assets/twittericon.png';
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
