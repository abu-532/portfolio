import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  selectedCert: any = null;

  certificates = [
    {
      title: 'Frontend Development Training',
      issuer: 'Besant Technologies',
      pdfUrl: '/assets/certificates/frontend-development.pdf'
    },
    {
      title: 'One Million Prompters',
      issuer: 'Issued by Dubai Centre for Artificial Intelligence (DCAI)',
      pdfUrl: '/assets/certificates/one-million-prompters.pdf'
    }
  ];

  openModal(cert: any, event: Event) {
    event.preventDefault();
    this.selectedCert = cert;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedCert = null;
    document.body.style.overflow = '';
  }
}
