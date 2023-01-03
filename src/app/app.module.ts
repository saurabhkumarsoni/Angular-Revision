import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopNavComponent } from './my-container/top-nav/top-nav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { Text1Component } from './my-container/text1/text1.component';
import { Text2Component } from './my-container/text2/text2.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgIfComponent } from './my-container/ng-if/ng-if.component';
import { NgSwitchComponent } from './my-container/ng-switch/ng-switch.component';
import { NgForComponent } from './my-container/ng-for/ng-for.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PizzaComponent } from './feature/pizza/pizza.component';
import { CakeComponent } from './feature/cake/cake.component';
import { FrenchComponent } from './feature/french/french.component';
import { CardComponent } from './feature/card/card.component';
import { ParentComponent } from './feature/parent/parent.component';
import { ChildComponent } from './feature/child/child.component';
import { ClientComponent } from './feature/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { HooksComponent } from './hooks/hooks.component';
import { Comp5Component } from './comp5/comp5.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { Comp6Component } from './comp6/comp6.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { TestDirective } from './appDirective/test.directive';
import { HostListnerComponent } from './host-listner/host-listner.component';
import { HostBindnindComponent } from './feature/host-bindnind/host-bindnind.component';
import { Test2Directive } from './appDirective/test2.directive';
import { DropdownDirective } from './appDirective/dropdown.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FilterPipe } from './appPipes/filter.pipe';
import { LangTranslateModule } from './appModules/design-utility/lang-translate.module';
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavComponent,
    HeaderComponent,
    Text1Component,
    Text2Component,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeatureComponent,
    DocsComponent,
    ResourcesComponent,
    EventsComponent,
    BlogsComponent,
    LoginComponent,
    PageNotFoundComponent,
    PizzaComponent,
    CakeComponent,
    FrenchComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    ClientComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    HooksComponent,
    Comp5Component,
    ViewChildComponent,
    Comp6Component,
    ContentChildComponent,
    TestDirective,
    HostListnerComponent,
    HostBindnindComponent,
    Test2Directive,
    // DropdownDirective,
    PipesComponent,
    FilterPipeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    LangTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
