import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Jéssica";
  age: number = 30;
  job = "programador";
  hobbies = ["corrrer", "jogar", "estudar"];
  car = {
    name: "Fiesta",
    year: 2014
  }

  constructor() { }

  ngOnInit(): void {
  }

}
