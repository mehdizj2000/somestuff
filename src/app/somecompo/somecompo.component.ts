import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'somecompo',
  templateUrl: './somecompo.component.html',
  styleUrls: ['./somecompo.component.css']
})
export class SomecompoComponent implements OnInit {

  viewMode: string = 'map';

  courses = [{ id: 0, name: "course0" },
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  ];

  trackByCourse(idx, course) {
    return course ? course.id : undefined;
  }

  addCourse() {
    this.courses.push({ id: 4, name: "course4" });
  }

  removeCourse(course) {
    let cIndex = this.courses.indexOf(course);
    this.courses.splice(cIndex, 1);
  }

  @Input('liked') isLiked: boolean = false;

  @Input('nol') numberOflikes: number = 0;

  constructor() { }

  handleHeart() {
    this.numberOflikes += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;

  }

  ngOnInit(): void {
  }

}
