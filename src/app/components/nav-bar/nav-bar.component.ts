import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    protected readonly router = inject(Router);
  log = console.log.bind(this);
    public readonly routes = [
      { path: '/home', label: 'NAVBAR.HOME' },
      { path: '/asfalistis', label: 'NAVBAR.ASFALISTIS' },
      { path: '/asfaleies', label: 'NAVBAR.ASFALEIES' },
      { path: '/contact', label: 'NAVBAR.CONTACT' },
    ];

    public isMobileMenuOpen = false;

    public toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    public isActive(path: string): boolean { 
      return this.router.isActive(path, {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored'
      });
    }

    public isActiveClass(path: string, mobile: boolean = false): string {
      let className = this.isActive(path) ? 'activated-route' : 'route';

      if (this.isActive(path) && mobile) {
        className += ' mobile-selected';
      }
  
      return className;
    }
}
