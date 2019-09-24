import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  display: boolean;

  constructor() { }

  ngOnInit() {
    this.display = true;

  }


  Userdata = [
    { name: 'Nayan', age: 24 },
    { name: 'Pratik', age: 44 },
    { name: 'Gaurav', age: 55 },
    { name: 'Neelam', age: 55 }
  ];

  togglethis() {
    this.display = !this.display;
  }
}
