import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './student-details.html'
})
export class StudentDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private studentsService = inject(StudentsService);
  student = signal<any>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student.set(this.studentsService.getStudentById(id));
  }
}