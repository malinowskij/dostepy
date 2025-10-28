import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RequestsListComponent } from './pages/requests-list/requests-list.component';
import { RequestFormComponent } from './pages/request-form/request-form.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'requests',
    component: RequestsListComponent
  },
  {
    path: 'requests/new',
    component: RequestFormComponent
  },
  {
    path: 'requests/:id',
    component: RequestDetailsComponent
  }
];
