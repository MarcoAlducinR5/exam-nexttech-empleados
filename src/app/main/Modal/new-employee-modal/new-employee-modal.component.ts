import { Component, inject } from '@angular/core';
import { GetAllJobs } from '../../../interfaces/getAllJobs';
import { GetAllJobsService } from '../../../services/getAllJobs/getalljobs.service';

@Component({
  selector: 'app-new-employee-modal',
  imports: [],
  templateUrl: "./new-employee-modal.component.html",
  styleUrl: './new-employee-modal.component.scss'
})
export class NewEmployeeModalComponent {
  getAllJobs: GetAllJobs[] = [];
  listAllJobs: GetAllJobsService = inject(GetAllJobsService);

  constructor(){
    this.getAllJobs = this.listAllJobs.getAllJobs();
  }
}
