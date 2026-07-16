import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  @Input() isAboutUsPage: boolean = false;
  private readonly router = inject(Router);

  navigateToAboutUs() {
    this.router.navigate(['/about-us']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/assets/certificates/abubakkar_sithiq_m_cv.pdf';
    link.download = 'abubakkar_sithiq_m_cv.pdf';
    link.click();
  }
}
