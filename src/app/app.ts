import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
  protected readonly showScroll = signal(false);
  protected readonly scrollProgress = signal(0);
  protected readonly isOverDark = signal(false);

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) { }

  private footerElement: Element | null = null;

  @HostListener('window:scroll', [])
  protected onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.showScroll.set(scrollPos > 300);

      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        this.scrollProgress.set((scrollPos / docHeight) * 100);
      } else {
        this.scrollProgress.set(0);
      }

      // Check overlap with footer dynamically
      if (!this.footerElement) {
        this.footerElement = document.querySelector('app-footer');
      }
      if (this.footerElement) {
        const footerRect = this.footerElement.getBoundingClientRect();
        // The button is located 40px from bottom, and is roughly 80px high (top edge is at window.innerHeight - 120px)
        this.isOverDark.set(footerRect.top <= window.innerHeight - 120);
      }
    }
  }

  ngAfterViewInit(): void {
    // No-op, footer tracked dynamically on scroll
  }

  protected scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
