import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RouterProject';
  ngOnInit() {
  }
  h1Text:string = "Coats for Kids";
  h2Text:string = "Every goat deserves a coat";
}

