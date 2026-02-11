import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students = [
    { id: 1, name: 'Sarah', course: 'Angular', level: 'Beginner', age: 18, address: 'Harif 13, Jerusalem', grades: [90, 85, 88, 100, 89, 90, 95] },
    { id: 2, name: 'Rivka', course: 'Angular', level: 'Advanced', age: 22, address: 'Rashi 76, Tveria', grades: [95, 92, 90, 96, 97, 89, 81] },
    { id: 3, name: 'Leah', course: 'React', level: 'Beginner', age: 19, address: 'Yaffo 97, Haifa', grades: [78, 85, 80, 80, 82, 76, 80] },
    { id: 4, name: 'Elisheva', course: 'React', level: 'Advanced', age: 18, address: 'Haor 3, Jerusalem', grades: [78, 85, 80, 82, 90, 89, 93] },
    { id: 5, name: 'Shira', course: 'React', level: 'Beginner', age: 20, address: 'Hazait 52, Beit Shemesh', grades: [78, 85, 80, 100, 90, 91, 78] },
  ];

  studentsList = signal(this.students);

  getStudentById(id: number) {
    return this.students.find(s => s.id === id);
  }
}