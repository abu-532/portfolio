import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  openLink(url: string) {
    window.open(url, '_blank');
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/assets/certificates/abubakkar_sithiq_m_cv.pdf';
    link.download = 'abubakkar_sithiq_m_cv.pdf';
    link.click();
  }
}
