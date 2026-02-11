import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  standalone: true,
  template: `
    <h3>ציונים:</h3>
    <ul>
      @for (grade of student?.grades; track $index) {
        <li>ציון: {{ grade }}</li>
      }
    </ul>
  `
})
export class GradesComponent {
  student = inject(StudentsService).getStudentById(Number(inject(ActivatedRoute).parent?.snapshot.paramMap.get('id')));
}