import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languageMenu = false;

  constructor(
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  openLanguages() {
    this.languageMenu = !this.languageMenu;
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}
