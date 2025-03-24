import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { HlmCardImports } from '../../../libs/ui/ui-card-helm/src';
import { HlmIconModule } from '../../../libs/ui/ui-icon-helm/src';
import { NgIcon } from '@ng-icons/core';
import { HlmButtonModule } from '../../../libs/ui/ui-button-helm/src';

@Component({
  selector: 'app-home-services',
  imports: [
    SharedModule,
    HlmCardImports,
    HlmIconModule,
    HlmButtonModule,
    NgIcon
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  public cards: { icon: string, title: string, description: string }[] = [
    {
      icon: 'lucideCarFront',
      title: 'HOME.SERVICES.CARDS.CARS.TITLE',
      description: 'HOME.SERVICES.CARDS.CARS.DESCRIPTION'
    },
    {
      icon: 'lucideHouse',
      title: 'HOME.SERVICES.CARDS.HOME.TITLE',
      description: 'HOME.SERVICES.CARDS.HOME.DESCRIPTION'
    },
    {
      icon: 'lucideHeart',
      title: 'HOME.SERVICES.CARDS.LIFE.TITLE',
      description: 'HOME.SERVICES.CARDS.LIFE.DESCRIPTION'
    },
    {
      icon: 'lucideEuro',
      title: 'HOME.SERVICES.CARDS.PENSION.TITLE',
      description: 'HOME.SERVICES.CARDS.PENSION.DESCRIPTION',
    }
  ];
}
