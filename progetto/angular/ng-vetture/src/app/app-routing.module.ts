import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InsertBrandComponent } from './insert-brand/insert-brand.component';
import { SearchBrandsComponent } from './search-brands/search-brands.component';
import { ShowBrandsComponent } from './show-brands/show-brands.component';
import { InsertModelComponent } from './insert-model/insert-model.component';
import { SearchModelsComponent } from './search-models/search-models.component';
import { ShowModelsComponent } from './show-models/show-models.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'store',
    component: StoreComponent,
    children: [
      {
        path: 'insert-brand',
        component: InsertBrandComponent,
        outlet: 'content'
      },
      {
        path: 'search-brands',
        component: SearchBrandsComponent,
        outlet: 'content'
      },
      {
        path: 'show-brands',
        component: ShowBrandsComponent,
        outlet: 'content'
      },
      {
        path: 'insert-model',
        component: InsertModelComponent,
        outlet: 'content'
      },
      {
        path: 'search-models',
        component: SearchModelsComponent,
        outlet: 'content'
      },
      {
        path: 'show-models',
        component: ShowModelsComponent,
        outlet: 'content'
      }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




