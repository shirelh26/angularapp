import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  standalone: true,
  template: `
    <div>
      <p>גיל: {{ student?.age }}</p>
      <p>כתובת: {{ student?.address }}</p>
    </div>
  `
})
export class GeneralInfoComponent {
  student = inject(StudentsService).getStudentById(Number(inject(ActivatedRoute).parent?.snapshot.paramMap.get('id')));
}