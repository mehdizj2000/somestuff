import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  categories = [
    { id: 1, name: 'dashagh' },
    { id: 2, name: 'kosagh' },
    { id: 3, name: 'koondagh' },
  ];

  ngOnInit(): void {
  }

}
