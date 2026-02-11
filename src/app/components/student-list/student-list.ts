import { Component, inject, computed } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-list.html'
})
export class StudentListComponent {
  private studentsService = inject(StudentsService);
  private route = inject(ActivatedRoute);

  private queryParams = toSignal(this.route.queryParams);

  filteredStudents = computed(() => {
    const list = this.studentsService.studentsList();
    const courseFilter = this.queryParams()?.['course'];

    if (!courseFilter || courseFilter === 'All') return list;
    return list.filter(s => s.course === courseFilter);
  });
}