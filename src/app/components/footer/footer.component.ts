import { Component } from '@angular/core';
import { HlmIconDirective } from '../../libs/ui/ui-icon-helm/src';
import { lucideMail, lucidePhone, lucideGlobe, lucideYoutube, lucideFacebook, lucideMapPin } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-footer',
  imports: [
    SharedModule,
    HlmIconDirective,
    NgIcon
  ],
  providers: [
    provideIcons({ lucidePhone, lucideMail, lucideGlobe, lucideYoutube, lucideFacebook, lucideMapPin })
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly year = new Date().getFullYear();

  public parseUrl(url: string) {
    return url.replace('www.', '');
  }
}
