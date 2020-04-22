import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }

  h1Text = "Coats for Kids";
  h2Text = "Every goat deserves a coat";
  title = 'RouterProject';
}

