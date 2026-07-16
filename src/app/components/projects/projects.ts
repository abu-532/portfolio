import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly projectsService = inject(ProjectsService);
  protected readonly featuredProjects: Project[] = this.projectsService.getFeaturedProjects();
}
