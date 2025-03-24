import { Component } from '@angular/core';

@Component({
  selector: 'app-home-companies',
  imports: [],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  public readonly companies: { name: string, logo: string }[] = [
    { name: 'eurobank', logo: 'assets/images/companies/eurobank-marquee.webp' },
    { name: 'allianz', logo: 'assets/images/companies/allianz-marquee.png' },
    { name: 'das', logo: 'assets/images/companies/das-marquee.png' },
    { name: 'ergo', logo: 'assets/images/companies/ergo-marquee.png' },
    { name: 'evropaiki', logo: 'assets/images/companies/evropaiki-marquee.webp' },
    { name: 'generali', logo: 'assets/images/companies/generali-marquee.png' },
    { name: 'interamerican', logo: 'assets/images/companies/interamerican-marquee.png' },
    { name: 'interlife', logo: 'assets/images/companies/interlife-marquee.png' },
    { name: 'intersalonica', logo: 'assets/images/companies/intersalonica-marquee.png' },
  ];
}
