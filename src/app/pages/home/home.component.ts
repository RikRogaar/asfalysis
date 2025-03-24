import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCarFront, lucideHouse, lucideHeart, lucideEuro, lucideChevronRight } from '@ng-icons/lucide';
import { SharedModule } from '../../shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { HeroComponent } from './hero/hero.component';
import { CompaniesComponent } from './companies/companies.component';

@Component({
  selector: 'app-home',
  imports: [
    SharedModule,
    HeroComponent,
    ServicesComponent,
    CompaniesComponent
  ],
  providers: [
    provideIcons({ lucideCarFront, lucideHouse, lucideHeart, lucideEuro, lucideChevronRight })
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
