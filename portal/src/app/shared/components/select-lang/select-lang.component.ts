import { Component, OnInit } from '@angular/core';
import { Language } from './language.interface';
import { TranslateService } from '@ngx-translate/core';

/**
 * Select Language
 * component to select language of the application
 * * options: EN, PT-BR
 */
@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss']
})
export class SelectLangComponent implements OnInit {

  /** List of Languages */
  public languages: Language[];
  /** Language selected */
  public languageId: string;

  constructor(public translate: TranslateService) { }

  /**
   * Define language possibilities in this component
   */
  ngOnInit() {
    this.languages = [
      {id: 'pt-br', icon: '/assets/images/icons/br.svg'},
      {id: 'en', icon: '/assets/images/icons/usa.svg'}
    ];
    this.languageId = 'en';
  }

  /**
   * change language
   */
  changeLanguage(lang: Language) {
    this.translate.use(lang.id);
  }

}
