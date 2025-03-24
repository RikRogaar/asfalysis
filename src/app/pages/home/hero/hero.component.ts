import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-home-hero',
  imports: [
    SharedModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
