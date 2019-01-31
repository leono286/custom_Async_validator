import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-template-driven',
  templateUrl: './async-template-driven.component.html',
  styleUrls: ['./async-template-driven.component.css']
})
export class AsyncTemplateDrivenComponent implements OnInit {

  githubUsername: string;

  constructor() { }

  ngOnInit() {
  }

}
