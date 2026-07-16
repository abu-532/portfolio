import { Component, HostListener, inject } from '@angular/core';
import { Education } from '../../components/education/education';
import { About } from '../../components/about/about';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [Education, About],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {

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
