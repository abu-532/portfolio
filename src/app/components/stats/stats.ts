import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Stat {
  target: number;
  suffix: string;
  label: string;
  current: number;
  decimals: number;
}

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  protected animated = signal(false);

  protected stats: Stat[] = [
    { target: 3.5, suffix: '+', label: 'Experience', current: 0, decimals: 1 },
    { target: 10, suffix: '+', label: 'Projects', current: 0, decimals: 0 },
    { target: 5, suffix: '+', label: 'Technologies', current: 0, decimals: 0 },
    { target: 100, suffix: '+', label: 'APIs Integrated', current: 0, decimals: 0 },
    { target: 50, suffix: '+', label: 'Lines of Code', current: 0, decimals: 0 },
  ];

  constructor(
    private readonly el: ElementRef,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) { }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated()) {
            this.animated.set(true);
            this.startCounting();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private startCounting(): void {
    const duration = 2000; // ms
    const fps = 60;
    const steps = Math.round((duration / 1000) * fps);

    this.stats.forEach((stat) => {
      let step = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        step++;
        stat.current = parseFloat(
          Math.min(increment * step, stat.target).toFixed(stat.decimals)
        );

        if (step >= steps) {
          stat.current = stat.target;
          clearInterval(timer);
        }
      }, 1000 / fps);
    });
  }

  protected formatValue(stat: Stat): string {
    return stat.decimals > 0
      ? stat.current.toFixed(stat.decimals)
      : Math.floor(stat.current).toString();
  }
}
