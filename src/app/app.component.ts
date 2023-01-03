import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-14';
switchLang!: string;
browserLang: any;
constructor(private service: UserService, public translate: TranslateService){
  this.service.selectedLang.subscribe(res =>{
    this.switchLang = res;

    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserLang = translate.getDefaultLang();
    this.languageChanged();
    // this.service.selectedLang.next(this.browserLang)
  })
}
  ngOnInit(){
    console.log('App MODULE LOADED')
  }

  selectedLang(lang: string){
    console.log('lang', lang)
    // this.switchLang = lang;
    this.service.selectedLang.next(lang)
  }

  languageChanged(){
    this.translate.use(this.browserLang.match(/de|en/)? this.browserLang: 'en')
  }
}
