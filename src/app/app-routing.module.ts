import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { DocsComponent } from './docs/docs.component';
import { EventsComponent } from './events/events.component';
import { CakeComponent } from './feature/cake/cake.component';
import { FeatureComponent } from './feature/feature.component';
import { FrenchComponent } from './feature/french/french.component';
import { HostBindnindComponent } from './feature/host-bindnind/host-bindnind.component';
import { ParentComponent } from './feature/parent/parent.component';
import { PizzaComponent } from './feature/pizza/pizza.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { HomeComponent } from './home/home.component';
import { HooksComponent } from './hooks/hooks.component';
import { HostListnerComponent } from './host-listner/host-listner.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourcesComponent } from './resources/resources.component';
import { CustomPreloadingService } from './service/custom-preloading.service';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'buy-products', component: ParentComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'hooks', component: HooksComponent},
  {path: 'viewchild', component: ViewChildComponent},
  {path: 'contentchild', component: ContentChildComponent},
  {path: 'hostlistner', component: HostListnerComponent},
  {path: 'hostbinding', component: HostBindnindComponent},
  {path: 'filter', component: FilterPipeComponent},
  {
    path: 'assigment',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {path: 'features', component: FeatureComponent, children:[
    {path: 'pizza', component: PizzaComponent},
    {path: 'cake', component: CakeComponent},
    {path: 'french', component: FrenchComponent}
  ]},
  {path: 'docs', component: DocsComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'blogs', component: BlogsComponent},
  { path: 'customers', data: {preload: true}, loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
