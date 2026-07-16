import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.scss',
})
export class Explore {
  private readonly projectsService = inject(ProjectsService);
  protected readonly allProjects: Project[] = this.projectsService.getAllProjects();


  private readonly router = inject(Router);
  isScrolled: boolean = false;
  isAboutUsPage: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  scrollToHome() {
    this.isAboutUsPage = false;
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }
}
