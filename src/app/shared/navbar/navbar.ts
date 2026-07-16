import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  isScrolled = false;
  isAboutUsPage = false;
  isExplorePage = false;
  private router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAboutUsPage = event.urlAfterRedirects.includes('/about-us');
        this.isExplorePage = event.urlAfterRedirects.includes('/projects');
      }
    });
    this.isAboutUsPage = this.router.url.includes('/about-us');
    this.isExplorePage = this.router.url.includes('/projects');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  handleNavClick(event: Event, sectionId: string) {
    event.preventDefault();

    if (this.isAboutUsPage || this.isExplorePage) {
      if (sectionId === 'about' || sectionId === 'home') {
        this.router.navigate(['/']);
        return;
      }
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.doScroll(sectionId);
        }, 100);
      });
    } else {
      this.doScroll(sectionId);
    }
  }

  private doScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for the fixed navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
