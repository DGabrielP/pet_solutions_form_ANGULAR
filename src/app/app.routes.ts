import { Routes } from '@angular/router';
import { ListComponent } from './products/list/list.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: 'products', component: ListComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/edit/:id', component: EditComponent }
];
