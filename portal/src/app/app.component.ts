import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * First application component
 * has only 'router-outlet'
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    public translate: TranslateService) {

    translate.setDefaultLang('pt-br');
  }

}
